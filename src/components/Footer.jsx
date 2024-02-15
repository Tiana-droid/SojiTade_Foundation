import React from "react";
import { NavLinks } from "./Navbar";
import { Logo } from "../Assets";
import { Button, FooterWrapper } from "./style";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone, MdOutlineEmail } from "react-icons/md";
import Handle from "./Handle";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <div className="div1">
          <span>
            <img src={Logo} alt="" />
            <h4>SojiTade Foundation</h4>
          </span>
          <p>
            Sojitade foundation strives to put an end to extreme poverty and
            acute illiteracy in Nigeria. Join us in empowering Ondo State
          </p>
          <Button
            width="170px"
            borderRadius="0px"
            fontWeight="600"
            style={{ fontSize: "16px" }}
          >
            Donate
          </Button>
        </div>

        <div className="div2">
          <h4>Reach out to us via</h4>
          <ul>
            <li>
            <MdOutlineEmail/>
              <span>
                <b>Email</b> <br />
                <a
                  href="mailto:info@sojitadefoundation.com"
                  style={{ color: "black", textDecoration: 'underline' }}
                >
                  info@sojitadefoundation.com
                </a>
              </span>
            </li>
            <li>
                <MdOutlineLocalPhone/>
              <span>
                <b>Call</b>
                <p>+2348131505522</p>
              </span>
            </li>
            <li>
                <AiOutlineClockCircle/>
              <span>
                <b>Opening Hours</b>
                <p>Mon - Fri: 8:00 - 17:00</p>
                
              </span>
            </li>
            <li>
                <IoLocationOutline/>
              <span>
                <b>Location</b>
                <p>Akure, Ondo State, Nigeria</p>
                
              </span>
            </li>
          </ul>
        </div>

        <div className="div3">
          <h4>Quick Links</h4>
          <ul>
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.link}>
                  {link.desc}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="copyright">
      <Handle/>
        <p>Website Developed by <a href="https://rb.gy/hx98av" target="_blank" rel="noreferrer" style={{textDecoration: 'underline'}}>Tiana</a> </p>
        <p>&copy; Copyright 2024, SojiTade Foundation</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
