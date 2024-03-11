import React, { useEffect, useState } from "react";
import { Wrapper, Card, Button } from "../components/style";
import { Header, AdminSection } from "./style";
import { Footer } from "../components";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { FaUser } from "react-icons/fa6";

const News = () => {
  const [news, setNews] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("https://api.jsonbin.io/v3/b/65eeb52adc74654018b13709/latest?_sort=day");
        const dataObject = await res.json();
        const newsArray = dataObject.record.news || []; // Access nested array or use empty array if not found
        setNews(newsArray);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  const newsPerPage = 3;
  const pagesVisited = pageNumber * newsPerPage;

  const displayNews = Array.isArray(news) && news.slice(pagesVisited, pagesVisited + newsPerPage)
    .map((en, index) => {
      return (
        <Card className="card" key={en.id}>
          <div className="img">
            <img srcSet={en.img} alt="" />
          </div>
          <div className="content">
            <h3>{en.title}</h3>
          </div>
          <div className="btn">
            <Link to={`/news_details?id=${en.id}`}>
              <Button $width="100%" $borderRadius="4px" $fontWeight="600">
                Read News
              </Button>
            </Link>
          </div>
        </Card>
        
      );
    });
  const pageCount = Math.ceil(news.length / newsPerPage);
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <Header>
        <h1> News</h1>
      </Header>
      <hr style={{ border: "0.5px solid #ececed" }} />
      <AdminSection>
        <h3>View the most recent news from our past events.</h3>
        <Link to="/login" style={{cursor: 'default'}}>
            <FaUser />
        </Link>
      </AdminSection>
      <Wrapper>
        {news.length === 0 ? (
          <div>No news found.</div>
          ) : (
          <div className="card-wrapper">{displayNews}</div>
          )}
        {pageCount > 1 && (
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        )}
      </Wrapper>
      <Footer />

    </>
  );
};

export default News;
