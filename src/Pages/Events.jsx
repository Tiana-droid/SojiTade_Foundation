import { React, useState, useEffect } from "react";
import { Header, Main, InputWrapper, AdminSection } from "./style";
import { Footer } from "../components";
import { Button } from "../components/style";
import ReactPaginate from "react-paginate";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Donate from "../components/Donate";

const Events = () => {
  const [news, setNews] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [showDonation, setShowDonation] = useState(false);
  const Donation = () => {
    setShowDonation(!showDonation);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          "https://api.jsonbin.io/v3/b/65eeb52adc74654018b13709/latest?_sort=day"
        );
        const dataObject = await res.json();
        const eventArray = dataObject.record.events || []; // Access nested array or use empty array if not found
        setNews(eventArray);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [pastEventChecked, setPastEventChecked] = useState(false);
  const [presentEventChecked, setPresentEventChecked] = useState(true);

  const handlePresentEventChange = () => {
    setPresentEventChecked(!presentEventChecked);
    setPastEventChecked(false);
  };

  const handlePastEventChange = () => {
    setPastEventChecked(!pastEventChecked);
    setPresentEventChecked(false);
  };

  const eventPerPage = 3;
  const pagesVisited = pageNumber * eventPerPage;

  const displayPastEvent = news
    .slice(pagesVisited, pagesVisited + eventPerPage)
    .map(
      (event, index) =>
        new Date(event.day).getFullYear() <= 2023 && (
          <div key={index} className="outer-div">
            <span>
              {new Date(`${event.day}`).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <div className="date" key={index}>
              <div className="title" onClick={() => handleToggle(index)}>
                <h3>{event.title}. </h3>
                <div className="sign">
                  {openIndex === index ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </div>
              </div>
              <Link
                to={`/news_details?id=${event.id}`}
                style={{ width: "30%" }}
              >
                <Button $borderRadius="0px" $width="100%">
                  {presentEventChecked ? "Register" : "Read News"}
                </Button>
              </Link>
            </div>
            {openIndex === index && (
              <div className="content">
                <p>{event.brief} </p>
              </div>
            )}
          </div>
        )
    );

  const displayPresentEvent = news
    .slice(pagesVisited, pagesVisited + eventPerPage)
    .map((event) => {
      return new Date(event.day).getFullYear() > 2023 ? (
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
    });
  const pageCount = Math.ceil(news.length / eventPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <Header>
        <h1>Events</h1>
      </Header>
      <hr style={{ border: ".5px solid#ececed" }} />
      <section>
        <AdminSection>
          <InputWrapper>
            <div className="check_div">
              <label>
                {" "}
                <input
                  type="checkbox"
                  name="Present"
                  id="present"
                  checked={presentEventChecked}
                  onChange={handlePresentEventChange}
                  disabled={presentEventChecked}
                />
                Present Year
              </label>
            </div>

            <div className="check_div">
              <label>
                {" "}
                <input
                  type="checkbox"
                  name="Past"
                  id="past"
                  checked={pastEventChecked}
                  onChange={handlePastEventChange}
                  disabled={pastEventChecked}
                />
                Past Year
              </label>
            </div>
          </InputWrapper>
          <Link to="/login" style={{ cursor: "default" }}>
            <FaUser />
          </Link>
        </AdminSection>
        {presentEventChecked && (
          <Main style={{ flexDirection: "column" }}>
            <div className="event-wrapper">
              {news.length > 0 &&
              news.some((event) => new Date(event.day).getFullYear() > 2023) ? (
                displayPresentEvent
              ) : (
                <i>No events scheduled</i>
              )}
            </div>
            <>
              {news.length > 0 &&
              news.some((event) => new Date(event.day).getFullYear() > 2023) ? (
                <ReactPaginate
                  className="paginate"
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                />
              ) : null}
            </>
          </Main>
        )}
        {pastEventChecked && (
          <Main style={{ flexDirection: "column" }}>
            <div className="event-wrapper">
              {news.length > 0 ? (
                displayPastEvent
              ) : (
                <p>Loading your news please wait...</p>
              )}
            </div>
            <ReactPaginate
              className="paginate"
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
          </Main>
        )}
      </section>
      <Header $bgColor="#213e8c">
        <p>We Need Your Support Today!</p>
        <button onClick={Donation}>Donate</button>
      </Header>
      {showDonation && <Donate close={Donation} />}
      <Footer />
    </>
  );
};

export default Events;
