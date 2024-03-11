import React, { useState } from "react";
import { Header } from "../Pages/style";
import { Button, AdminTab } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const CRUD = () => {
  const [news, setNews] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const navigate = useNavigate();

  const generateCommonId = () => {
    return uuidv4();
  };

  // Usage
  let commonId = generateCommonId();
  console.log(commonId);

  const saveNews = async () => {
    try {
      const res = await fetch(
        "https://api.jsonbin.io/v3/b/65eeb52adc74654018b13709",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key":
              "$2a$10$fwgqE7ZB.7nDc7q7nyVBIu0rewQsGpOT0MUNA3LNaeVeFNwKVTJYO",
            "X-ACCESS-KEY":
              "$2a$10$U0AozbSuq.CgoXqnY.TVnOunKkkPIVzip0cRXTxP7LtVMx.eFz7Xu",
          },
        }
      );

      const currentData = await res.json();

      const newNewsItem = {
        id: commonId,
        title: newTitle,
        content: newContent,
        img: newImage,
        day: newDate,
        category: newCategory,
      };

      // Add the new news item to the existing news array
      const updatedNews = [...currentData.record.news, newNewsItem];

      // Construct the updated data object with the new news item
      const updatedData = {
        ...currentData.record,
        news: updatedNews,
      };

      const putResponse = await fetch(
        "https://api.jsonbin.io/v3/b/65eeb52adc74654018b13709",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key":
              "$2a$10$fwgqE7ZB.7nDc7q7nyVBIu0rewQsGpOT0MUNA3LNaeVeFNwKVTJYO",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (putResponse.ok) {
        setNews(newNewsItem);
        toast.success("News created successfully");
        setTimeout(() => {
          navigate("/news");
        }, 5000);
      } else {
        toast.error("Error: News not created");
      }
    } catch (error) {
      <h3>
        {document.write("Error creating new news ", error)}
        <Link to="/news" style={{ color: "blue" }}>
          Go back
        </Link>
      </h3>;
    }
  };

  const saveEvents = async () => {
    try {
      const res = await fetch(
        "https://api.jsonbin.io/v3/b/65eeb52adc74654018b13709",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key":
              "$2a$10$fwgqE7ZB.7nDc7q7nyVBIu0rewQsGpOT0MUNA3LNaeVeFNwKVTJYO",
            "X-ACCESS-KEY":
              "$2a$10$U0AozbSuq.CgoXqnY.TVnOunKkkPIVzip0cRXTxP7LtVMx.eFz7Xu",
          },
        }
      );

      const currentData = await res.json();

      const newEventItem = {
        id: commonId,
        title: newTitle,
        brief: newContent,
        img: newImage,
        day: newDate,
        category: newCategory,
      };

      // Add the new news item to the existing news array
      const updatedNews = [...currentData.record.events, newEventItem];

      // Construct the updated data object with the new event item
      const updatedData = {
        ...currentData.record,
        events: updatedNews,
      };

      const putResponse = await fetch(
        "https://api.jsonbin.io/v3/b/65eeb52adc74654018b13709",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key":
              "$2a$10$fwgqE7ZB.7nDc7q7nyVBIu0rewQsGpOT0MUNA3LNaeVeFNwKVTJYO",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (putResponse.ok) {
        setNews(newEventItem);
        toast.success("Event created successfully");
        setTimeout(() => {
          navigate("/events");
        }, 5000);
      } else {
        toast.error("Error: Event not created");
      }
    } catch (error) {
      <h3>
        {document.write("Error creating new event", error)}
        <Link to="/news" style={{ color: "blue" }}>
          Go back
        </Link>
      </h3>;
    }
  };

  const [activeTab, setActiveTab] = useState("tabA");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const TabPanel = [
    {
      id: 1,
      tab: "tabA",
      btnName: "Add News",
      main: (
        <>
          <div className="input">
            <label htmlFor="newsTitle">Title: </label>
            <input
              type="text"
              name="newsTitle"
              id="newsTitle"
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Date:</label>
            <input
              type="date"
              id="date"
              onChange={(e) => setNewDate(e.target.value)}
            />
          </div>
          <div className="input">
            <label>News Deatails: </label>
            <textarea
              type="text"
              onChange={(e) => setNewContent(e.target.value)}
            ></textarea>
          </div>

          <div className="input">
            <label>Image URL: </label>
            <input type="text" onChange={(e) => setNewImage(e.target.value)} />
          </div>
          <div className="input">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </div>
          <Button onClick={saveNews}>Save News</Button>
        </>
      ),
    },
    {
      id: 2,
      tab: "tabB",
      btnName: "Add Event",
      main: (
        <>
          <div className="input">
            <label htmlFor="eventTitle">Title: </label>
            <input
              type="text"
              name="eventTitle"
              id="eventTitle"
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Date:</label>
            <input
              type="date"
              id="date"
              onChange={(e) => setNewDate(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="category">Category (in SDG)</label>
            <input
              type="text"
              id="category"
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Brief: </label>
            <textarea
              type="text"
              onChange={(e) => setNewContent(e.target.value)}
            ></textarea>
          </div>
          <Button onClick={saveEvents}>Save Event</Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Header>
        <h1>hello Admin</h1>
      </Header>
      <hr style={{ border: "0.5px solid #ececed" }} />
      <ToastContainer />
      <AdminTab>
        <ul>
          {TabPanel.map((tabs) => (
            <button
              style={{
                backgroundColor: activeTab === tabs.tab ? "#c84869" : "#ddd",
              }}
              onClick={() => handleTabChange(tabs.tab)}
              role="tab"
              key={tabs.id}
            >
              {tabs.btnName}
            </button>
          ))}
        </ul>

        {TabPanel.map((tabs) => (
          <main key={tabs.id}>
            {activeTab === tabs.tab && <>{tabs.main}</>}
          </main>
        ))}
      </AdminTab>
    </div>
  );
};

export default CRUD;
