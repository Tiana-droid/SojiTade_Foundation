import "./App.css";
import { CRUD, NavBar } from "./components/index.js";
import SignUp from "./Auth/SignUp.jsx";
import LogIn from "./Auth/LogIn.jsx";
import {
  About,
  Home,
  Events,
  Contact,
  News,
  NewsDetails,
} from "./Pages/index.js";
import { Routes, Route, Link } from "react-router-dom";
import { AiFillMessage } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/news_details" element={<NewsDetails />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/post" element={<CRUD />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<LogIn />} />
      </Routes>
      <span className="message">
        <Link to="/contact">
          <AiFillMessage />
        </Link>
      </span>
    </div>
  );
}

export default App;
