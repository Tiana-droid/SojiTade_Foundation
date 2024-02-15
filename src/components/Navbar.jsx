import { React, useState } from "react";
import logo from "../Assets/logo.png";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { Nav, Flex } from "./style";
import { NavLink} from "react-router-dom";
import Donate from "./Donate";

export const NavLinks = [
  {
    link: "/",
    desc: "Home",
  },
  {
    link: "/about",
    desc: "About",
  },
  {
    link: "/events",
    desc: "Events",
  },
  {
    link: "/news",
    desc: "News",
  },
  {
    link: "contact",
    desc: "Contact",
  },
];

const Navbar = () => {
  const [draw, setDraw] = useState(false);

  const Drawer = () => {
    setDraw(!draw);
  };
  const variantsDesktop = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
    hidden: { opacity: 0 },
  };

  const variantsMobile = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
    hidden: {
      opacity: 0,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  };

  // const itemVariants = {
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //   },
  //   hidden: {
  //     y: 50,
  //     opacity: 0,
  //   },
  // };

  return (
    <Nav>
      <Flex>
        <motion.div
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a href="/">
            <img src={logo} alt="" />
          </motion.a>
        </motion.div>
        <motion.nav>
          <motion.div className="menu" onClick={Drawer}>
            <FaBars />
          </motion.div>
          <div className="nav-menu">
            <motion.ul>
              {NavLinks.map((link, index) => (
                <motion.li key={index} variants={variantsDesktop}>
                  <NavLink to={link.link}>{link.desc}</NavLink>
                </motion.li>
              ))}
            </motion.ul>
            <motion.button
              className="donate-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              onClick={Drawer}
            >
              Donate
            </motion.button>
          </div>
        </motion.nav>
      </Flex>

      {draw && (
        <motion.div
          className="backdrop"
          onClick={Drawer}
          animate={{ x: draw ? 5 : 0 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
        >
          <motion.span
            onClick={Drawer}
            initial="hidden"
            animate="visible"
            variants={variantsMobile}
          >
            close
          </motion.span>
          <motion.div className="sidenav">
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={variantsMobile}
            >
              {NavLinks.map((nav, index) => (
                <motion.li
                  key={index}
                  onClick={Drawer}
                  variants={variantsMobile}
                >
                  <NavLink to={nav.link}>
                    {nav.desc}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>

            <a
              className="donate-button"
              target="blank"
              href="/"
            >
             Donate
            </a>
          </motion.div>
        </motion.div>
      )}

      {draw && <Donate/>}
    </Nav>
  );
};

export default Navbar;
