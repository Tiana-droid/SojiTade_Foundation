import React, { useEffect, useState } from "react";
import { Header, Main2, AdminSection, BackDrop } from "./style";
import { Footer } from "../components";
import { Button, AdminTab, Card } from "../components/style";
import { FaUser, FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsDetails = () => {
  const id = new URLSearchParams(window.location.search).get("id");
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [showEditMode, setShowEditMode] = useState(false);
  const [newValue, setValue] = useState({
    id: id,
    title: "",
    day: "",
    img: "",
    content: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSingleNews = async () => {
      try {
        const res = await fetch(`http://localhost:5000/news/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await res.json();
        setNews(data);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching news details", error);
        setLoading(false);
      }
    };

    fetchSingleNews();
  }, [id]);

  const handleEditClick = () => {
    setEditMode(!editMode);
    // Set initial values based on existing news details
    setValue({
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
        // Update existing news
        const res = await fetch(`http://localhost:5000/news/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newValue.title,
            day: newValue.day,
            img: newValue.img,
            content: newValue.content,
          }),
        });

        if (res.ok) {
          // If the update is successful, update the local state
          setNews({
            ...news,
            title: newValue.title,
            day: newValue.day,
            img: newValue.img,
            content: newValue.content,
          });

          // Exit edit mode
          setEditMode(false);
          // Navigate to the news page
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
      const res = await fetch(`http://localhost:5000/news/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        // If the deletion is successful, you might redirect to the news list page or perform other actions
        toast.success("News deleted successfully");
        setTimeout(() => {
          navigate("/news");
        }, 2000);
      } else {
        toast.error("Error deleting news");
      }
    } catch (error) {
      console.error("Error deleting news:", error);
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

              <h3 style={{marginTop: '2em'}}>You are about to edit the above news </h3>
              <p>Do you wish to proceed?</p>
              <div className="prompt_btn">
              <Button onClick={handleEditClick}>Yes</Button>
              <Link to="/news">
                No
              </Link>
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
          <h3 style={{marginTop: '2em'}}>You are about to delete the above news </h3>
          <p>Do you wish to proceed?</p>
          <div className="prompt_btn">
              <Button onClick={handleDeleteClick}>Yes</Button>
              <Link to="/news">
                No
              </Link>
              </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Header height="400px" alignItems="flex-start" gap="3em">
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

        <FaUser onClick={() => setShowEditMode(!showEditMode)} />
      </AdminSection>
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
