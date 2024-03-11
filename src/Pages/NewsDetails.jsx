import React, { useEffect, useState } from "react";
import { Header, Main2, AdminSection, BackDrop } from "./style";
import { Footer } from "../components";
import NewsLogin from "../Auth/NewsLogin";
import { Button, AdminTab, Card } from "../components/style";
import { FaUser, FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [showEditMode, setShowEditMode] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [newValue, setValue] = useState({
    id: id,
    title: "",
    day: "",
    img: "",
    content: "",
  });

  const navigate = useNavigate();

  const HandleLoginPage = () => {
    setShowLoginPage(!showLoginPage);

    setTimeout(() => {
      setShowLoginPage(false);
    }, 5000);
  };

  useEffect(() => {
    const fetchSingleNews = async () => {
      try {
        const res = await fetch(
          "https://api.jsonbin.io/v3/b/65eeb52adc74654018b13709/latest"
        );
        if (!res.ok) {
          throw new Error(`News with id ${id} not found`);
        }
        const data = await res.json();

        const newsItem = data.record.news.find((item) => item.id === id);
        if (!newsItem) {
          throw new Error(`News with id ${id} not found`);
        }
        setNews(newsItem);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching news details", error.message);
        setLoading(false);
      }
    };

    fetchSingleNews();
  }, [id]);

  const handleEditClick = () => {
    setEditMode(!editMode);
    // Set initial values based on existing news details
    setValue({
      ...news,
      id: news.id,
      title: news.title,
      day: news.day,
      img: news.img,
      content: news.content,
    });
  };

  const handleSaveClick = async () => {
    try {
      if (editMode) {
        const binId = "65eeb52adc74654018b13709";
        const apiKey =
          "$2a$10$fwgqE7ZB.7nDc7q7nyVBIu0rewQsGpOT0MUNA3LNaeVeFNwKVTJYO";

        const updatedNewsItem = {
          id: news.id,
          title: newValue.title,
          day: newValue.day,
          img: newValue.img,
          content: newValue.content,
        };

        // Fetch the current data from JSONBin.io
        const res = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
          method: "GET",
          headers: {
            "X-Master-Key": apiKey,
          },
        });
        const currentData = await res.json();

        // Update the news item in the current data
        const updatedNews = currentData.record.news.map((item) =>
          item.id === news.id ? updatedNewsItem : item
        );

        // Construct the updated data object
        const updatedData = {
          ...currentData.record,
          news: updatedNews,
        };

        // Send the updated data in a PUT request
        const putResponse = await fetch(
          `https://api.jsonbin.io/v3/b/${binId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "X-Master-Key": apiKey,
            },
            body: JSON.stringify(updatedData),
          }
        );

        if (putResponse.ok) {
          // Update the local state
          setNews(updatedNewsItem);
          setEditMode(false);
          toast.success("News Updated successfully");
          setTimeout(() => {
            navigate("/news");
          }, 5000);
        } else {
          toast.error("Error updating news details");
        }
      }
    } catch (error) {
      toast.error("Error saving news details:", error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      const binId = "65eeb52adc74654018b13709";
      const apiKey = "$2a$10$fwgqE7ZB.7nDc7q7nyVBIu0rewQsGpOT0MUNA3LNaeVeFNwKVTJYO";
  
      // Fetch the current data from JSONBin.io
      const res = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
        method: "GET",
        headers: {
          "X-Master-Key": apiKey,
        },
      });
      const currentData = await res.json();
  
      // Filter out the news item with the current ID
      const updatedNews = currentData.record.news.filter(
        (item) => item.id !== news.id
      );
  
      // Construct the updated data object without the deleted news item
      const updatedData = {
        ...currentData.record,
        news: updatedNews,
      };
  
      // Send the updated data in a PUT request to delete the news item
      const putResponse = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": apiKey,
        },
        body: JSON.stringify(updatedData),
      });
  
      if (putResponse.ok) {
        toast.success("News deleted successfully");
        setTimeout(() => {
          navigate("/news");
        }, 2000);
      } else {
        toast.error("Error deleting news");
      }
    } catch (error) {
      console.error("Error deleting news:", error);
      toast.error("Error deleting news");
    }
  };
  
  const [activeTab, setActiveTab] = useState("tabA");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const TabPanel4Update = [
    {
      id: 1,
      tab: "tabA",
      btnName: "Edit News",
      main: (
        <>
          {editMode ? (
            <AdminTab>
              <div className="input">
                <label htmlFor="newsTitle">Title: </label>
                <input
                  type="text"
                  value={newValue.title}
                  onChange={(e) =>
                    setValue((prevState) => ({
                      ...prevState,
                      title: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="input">
                <label>News Deatails: </label>
                <textarea
                  value={newValue.content}
                  onChange={(e) =>
                    setValue((prevState) => ({
                      ...prevState,
                      content: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="input">
                <label>Date:</label>
                <input
                  type="date"
                  id="date"
                  value={newValue.day}
                  onChange={(e) =>
                    setValue((prevState) => ({
                      ...prevState,
                      day: e.target.value,
                    }))
                  }
                />
              </div>
              {/* Include the file input for image upload */}
              <div className="input">
                <label>Upload Image:</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setValue((prevState) => ({
                      ...prevState,
                      img: e.target.value,
                    }))
                  }
                />
              </div>
              <Button onClick={handleSaveClick}>Save</Button>
            </AdminTab>
          ) : (
            <div className="prompt">
              <Card className="card">
                <div className="img">
                  <img srcSet={news.img} alt="network err" />
                </div>
                <div className="content">
                  <h3>{news.title}.</h3>
                </div>
              </Card>

              <h3 style={{ marginTop: "2em" }}>
                You are about to edit the above news{" "}
              </h3>
              <p>Do you wish to proceed?</p>
              <div className="prompt_btn">
                <Button onClick={handleEditClick}>Yes</Button>
                <Link to="/news">No</Link>
              </div>
            </div>
          )}
        </>
      ),
    },
    {
      id: 2,
      tab: "tabB",
      btnName: "Delete News",
      main: (
        <div className="prompt">
          <Card className="card">
            <div className="img">
              <img srcSet={news.img} alt="network err" />
            </div>
            <div className="content">
              <h3>{news.title}.</h3>
            </div>
          </Card>
          <h3 style={{ marginTop: "2em" }}>
            You are about to delete the above news{" "}
          </h3>
          <p>Do you wish to proceed?</p>
          <div className="prompt_btn">
            <Button onClick={handleDeleteClick}>Yes</Button>
            <Link to="/news">No</Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <ToastContainer />
      <Header $height="400px" $alignItems="flex-start" $gap="3em">
        <FaArrowLeftLong
          onClick={() => {
            navigate(-1);
          }}
          id="back"
        />
        <h1>{news.title}</h1>
      </Header>
      <ToastContainer />
      <hr style={{ border: "0.5px solid #ececed" }} />
      <AdminSection>
        <h3>
          Date posted:{" "}
          {new Date(`${news.day}`).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h3>
        <FaUser onClick={HandleLoginPage} />
      </AdminSection>
      {showLoginPage && (
        <NewsLogin
          showEditMode={showEditMode}
          setShowEditMode={setShowEditMode}
        />
      )}
      <Main2 id="news">
        {loading ? (
          <p>Loading your news please wait...</p>
        ) : (
          <>
            <img id="news_img" src={news.img} alt="" />
            <p style={{ textAlign: "justify" }}>{news.content}</p>
          </>
        )}
      </Main2>

      {showEditMode && (
        <BackDrop>
          <span onClick={() => setShowEditMode(!showEditMode)}>close</span>
          <Header>
            <h1>hello Admin</h1>
          </Header>
          <>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <AdminTab className="btn">
                  <ul>
                    {TabPanel4Update.map((tabs) => (
                      <button
                        style={{
                          backgroundColor:
                            activeTab === tabs.tab ? "#c84869" : "#ddd",
                        }}
                        onClick={() => handleTabChange(tabs.tab)}
                        role="tab"
                        key={tabs.id}
                      >
                        {tabs.btnName}
                      </button>
                    ))}
                  </ul>

                  {TabPanel4Update.map((tabs) => (
                    <main key={tabs.id}>
                      {activeTab === tabs.tab && <>{tabs.main}</>}
                    </main>
                  ))}
                </AdminTab>
              </>
            )}
          </>
        </BackDrop>
      )}
      <Footer />
    </div>
  );
};

export default NewsDetails;
