import { React, useState, useEffect } from "react";
import { Main } from "../Pages/style";
// import { Button } from "./style";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, [news]);
  return (
    <Main>
      <div className="event-wrapper">
        {news.length > 0 &&
        news.some((event) => new Date(event.day).getFullYear() > 2023) ? (
          news.map((event) => {
            const eventYear = new Date(event.day).getFullYear();

            return eventYear > 2023 ? (
              <div key={event.id} className="outer-div">
                <span>
                  {new Date(`${event.day}`).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <div
                  className="date"
                  key={event.id}
                  onClick={() => handleToggle(event.id)}
                >
                  <h3>{event.title}. </h3>
                  <div className="sign">
                    {openIndex === event.id ? (
                      <MdOutlineKeyboardArrowUp />
                    ) : (
                      <MdOutlineKeyboardArrowDown />
                    )}
                  </div>
                </div>
                {openIndex === event.id && (
                  <div className="content">
                    <p>{event.brief} </p>
                  </div>
                )}
              </div>
            ) : null;
          })
        ) : (
          <i>No events scheduled</i>
        )}
      </div>
    </Main>
  );
};

export default Accordion;
