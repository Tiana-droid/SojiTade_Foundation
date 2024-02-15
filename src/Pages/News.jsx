import React, { useEffect, useState } from "react";
import { Wrapper, Card, Button } from "../components/style";
import { Header, AdminSection } from "./style";
import { Footer, /*CRUD*/ } from "../components";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { FaUser } from "react-icons/fa6";

const News = () => {
  const [news, setNews] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch("http://localhost:5000/news?_sort=day");
      const data = await res.json();
      setNews(data);
    };
    fetchNews();
  }, []);

  const newsPerPage = 3;
  const pagesVisited = pageNumber * newsPerPage;

  const displayNews = news
    .slice(pagesVisited, pagesVisited + newsPerPage)
    .map((en) => {
      return (
        <Card className="card" key={en.id}>
          <div className="img">
            <img srcSet={en.img} alt="network err" />
          </div>
          <div className="content">
            <h3>{en.title}.</h3>
          </div>
          <div className="btn">
            <Link to={`/news_details?id=${en.id}`}>
              <Button width="100%" borderRadius="4px" fontWeight="600">
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
        <h3>Read our latest news from our events so far</h3>
        <Link to="/signup">
            <FaUser />
        </Link>
      </AdminSection>
      <Wrapper>
        <div className="card-wrapper">{displayNews}</div>
        <ReactPaginate
          className="paginate"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          //  pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </Wrapper>
      <Footer />

    </>
  );
};

export default News;
