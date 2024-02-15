import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import styled from "styled-components";

const Links = [
  {
    id: "one",
    icon: <FiFacebook />,
    ref: "https://web.facebook.com/sojitadefoundation-632875727233554/",
  },
  {
    id: "two",
    icon: <FiTwitter />,
    ref: "https://twitter.com/Infosojitadefo1",
  },
  {
    id: "three",
    icon: <FiInstagram />,
    ref: "https://www.instagram.com/sojitadefoundation/",
  },
  {
    id: "four",
    icon: <FiLinkedin />,
    ref: "#",
  },
  {
    id: "five",
    icon: <FaWhatsapp />,
    ref: "#",
  },
];
const UL = styled(motion.ul)`
  width: inherit;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding-top: 15px;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-top: 0px;
  background-color: transparent;

  a#five {
    svg {
      fill: #ddd;
      font-size: 17px;

      &:hover {
        fill: #dddddd54;
      }
    }
  }

  svg {
    stroke: #ddd;
    font-size: 17px;

    &:hover {
      stroke: #dddddd54;
    }
  }

  @media (min-width: 850px) {
    width: 30px;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    bottom: 6%;
    right: 1%;
    margin-top: 20px;
    background-color: #0e2973;
    z-index: 2000;
  }
`;
const VR = styled.li`
  display: none;

  @media (min-width: 850px) {
    display: inline-block;
    width: 3px;
    height: 100px;
    background-color: #ddd;
  }
`;
const textVariants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};
const Handle = () => {
  return (
    <UL variants={textVariants} initial="initial" whileInView="animate">
      {Links.map((link, i) => (
        <motion.li key={i} variants={textVariants}>
          <motion.a
            href={link.ref}
            id={link.id}
            target="blank"
            variants={textVariants}
          >
            {link.icon}
          </motion.a>
        </motion.li>
      ))}
      <VR></VR>
    </UL>
  );
};

export default Handle;
