import styled from "styled-components";
import { Img1, Img2, Img3, Img4 } from "../Assets";

const Images = [Img1, Img2, Img3, Img4];

export const Nav = styled.div`
  width: 100%;
  height: 70px;
  margin: auto;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0 10px;
  nav {
    .nav-menu {
      padding: 0px 20px;
      display: none;

      @media (min-width: 800px) {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        ul {
          width: 350px;
          display: flex;
          justify-content: space-between;
          padding-right: 10px;

          a {
            text-decoration: none;
            color: #fff;
            font-size: 13px;
            padding-bottom: 2px;

            &.active {
              font-weight: 600;
              border-bottom: 2px solid #c84869;
            }
          }
        }
      }

      .donate-button {
        padding: 0.75rem 1rem;
        background-color: #c84869;
        color: #fff;
        text-decoration: none;
        border: 2px solid #c84869;
        border-radius: 4px;
        cursor: pointer;
      }
    }
    .menu {
      display: block;
      cursor: pointer;

      svg {
        fill: #fff;
        font-size: 20px;
      }

      @media (min-width: 800px) {
        display: none;
      }
    }
  }

  .backdrop {
    width: 100%;
    height: 120vh;
    position: absolute;
    top: 100%;
    left: -6px;
    background-color: #eeeeeef7;

    @media (min-width: 700px) {
      width: 80%;
    }
    @media (min-width: 800px) {
      display: none;
    }

    span {
      position: relative;
      left: 77%;
      top: 20px;
      font-weight: 600;
      font-size: 18px;
      padding: 4px 7px;
      background-color: #fff;
      border-radius: 4px;
      color: #000;
      cursor: pointer;
    }
  }
  .sidenav {
    position: relative;
    top: 38px;
    height: inherit;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    z-index: 20;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding-inline-start: 0;
      width: 100%;
      height: 37vh;
      margin-top: 4em;

      li {
        width: 100%;
        text-align: center;
      }

      a {
        text-decoration: none;
        color: #000;
        font-size: 23px;
        padding: 3px;

        &.active {
          font-weight: 600;
          border-bottom: 3px solid #c84869;
        }
      }
    }

    .donate-button {
      margin-top: 30px;
      padding: 0.75rem 1rem;
      background-color: #c84869;
      color: #fff;
      text-decoration: none;
      border: 2px solid #c84869;
      border-radius: 4px;
      text-align: center;
      cursor: pointer;
    }
  }
`;
export const Flex = styled.div`
  display: flex;
  align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : "center")};
  justify-content: ${({ $justifyContent }) =>
    $justifyContent ? $justifyContent : "space-between"};
  flex-direction: ${({ view }) => (view === "grid" ? "column" : "row")};
  gap: ${({ $gap }) => ($gap ? $gap : "3em")};
  flex-wrap: ${({ $flexWrap }) => ($flexWrap ? $flexWrap : "nowrap")};
  height: inherit;
  flex-wrap: wrap;
  li {
    list-style: none;
    font-size: 13px;
  }
`;
export const Image = styled.div`
  width: 100%;
  height: 120dvh;
  position: fixed;
  z-index: -1;

  @media (min-width: 1000px) and (min-height: 1000px) {
    height: fit-content;
  }

  .splide__arrows {
    display: none;
  }
  .splide__track {
    height: 120dvh;

    @media (min-width: 1000px) and (min-height: 1000px) {
      height: fit-content;
    }
  }

  img {
    width: 100%;
    height: 115dvh;
    object-fit: cover;
    object-position: center;

    @media (min-width: 1000px) and (min-height: 600px) {
      height: fit-content;
    }
  }

  .topper {
    width: 100%;
    height:120dvh;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h1 {
      color: #fff;
      font-size: clamp(40px, 8vw, 80px);
      font-weight: 700;
      margin-left: 8px;
      text-align: center;
    }
  }

  /* ${Images.map(
    (img, array) =>
      `background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.8) 100%
      ),
      url(${img});
      
      console.log(img) 
      `
  )}
      background-repeat: no-repeat;
      background-size: cover;
      background-blend-mode: darken; */
`;
export const TabArea = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* gap: 2rem; */
  justify-items: start;
  position: relative;
  background: white;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    cursor: pointer;

    @media (min-width: 640px) {
      flex-direction: row;
    }

    /* &::-webkit-scrollbar {
      width: 10px !important;
      margin-top: 10px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 10px;
    } */

    li {
      display: flex;
      flex-direction: column;
      overflow-x: auto;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-align: center;
    }
  }

  main {
    margin-top: 10px;
    width: 100%;
  }
`;
export const Button = styled.button`
  width: ${({ $width }) => ($width ? $width : "35%")};
  height: 50px;
  background-color: #c84869;
  border-radius: ${({ $borderRadius }) => ($borderRadius ? $borderRadius : "8px")};
  color: white;
  border: none;
  outline: none;
  font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : "500")};
  cursor: pointer;
`;
export const Wrapper = styled.div`
  width: 94%;
  height: fit-content;
  margin: 30px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (min-width: 850px) {
    width: 70%;
  }

  h1 {
    font-size: clamp(40px, 8vw, 60px);
    font-weight: 700;
  }

  #more {
    color: #c84869;

    &:hover {
      font-weight: 700;
    }
  }

  .card-wrapper {
    width: 100%;
    display: flex;
    gap: 2em;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
  }

  .pic-container {
    width: 100%;
    display: flex;
  }

  .pic-wrapper {
    margin-right: 20px;
    width: 100%;
    height: 50vh;

    img {
      height: 50vh;
      object-fit: cover;
      object-position: center;
    }
  }
  .paginate {
    width: 40%;
    height: 100px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    @media (max-width: 500px) {
      width: 60%;
    }
    @media (min-width: 768px) {
      width: 30%;
    }

    .selected {
      background-color: #c84869;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    

      a {
        color: white;
      }
    }

    .disabled {
      a {
        color: #bbb;
      }
    }

    a {
      color: black;
    }
  }
`;
export const Card = styled.div`
  width: ${({ $width }) => ($width ? $width : "300px")};
  height: fit-content;
  border: 0.2px solid #d6d6d6;
  box-shadow: 0px 1px 5px #bebebe;

  img {
    width: 300px;
    height: 150px;
    object-fit: cover;
    object-position: center;
  }

  .content {
    padding: 20px;

    h3 {
      font-weight: 600;
      font-size: clamp(10px, 2vw, 20px);
    }
  }

  .btn {
    border-top: 0.2px solid #cfcdcd;
    width: 80%;
    margin: auto;
    padding: 15px 0;
  }
`;
export const Outer = styled.div`
  width: 100%;
  background-color: #213e8c;
  height: fit-content;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3em;

  &.focus {
    padding-bottom: 5em;

    section {
      display: flex;
      flex-direction: column;
      gap: 2em;
    }
    b {
      color: #fff;
      font-size: 19px;
      line-height: 32px;
    }
    li {
      color: #ddd;
      line-height: 25px;
      list-style: disc;
    }
    @media (min-width: 1200px) {
      flex-direction: row-reverse;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 1em;
  }

  h1 {
    color: #fff;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 700;
  }

  .container {
    width: 40%;
    margin: 0 auto 30px auto;
    height: fit-content;
    border-radius: 8px;
    border: 0.2px solid #d6d6d6;
    box-shadow: 0px 1px 5px #213e8c;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 2em;
    background-color: #fff;

    @media (max-width: 640px) {
      width: 100%;
    }

    .profile-pic {
      width: 45%;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
      }
    }
    p {
      font-size: 16px;
    }
    span {
      font-size: 16px;
      color: #c84869;
      font-weight: 500;
    }
  }
`;
export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-top: 8px solid #213e8c;

  .wrapper {
    width: 100%;
    display: flex;
    column-gap: 7em;
    row-gap: 2em;
    flex-wrap: wrap;
    padding: 30px;

    h4 {
      font-size: 19px;
    }

    .div1 {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1em;

      @media (min-width: 820px) {
        width: 60%;
      }
      @media screen and (min-width: 1200px) {
        width: 40%;
      }
      h4 {
        margin-block-start: 1em;
      }
    }

    .div2 {
      ul {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 1em;

        li {
          display: flex;
          gap: 10px;
          align-items: center;

          b {
            font-size: 15px;
          }

          svg {
            stroke: #c84869;
            fill: #c84869;
            font-size: 20px;
          }
        }
      }
    }

    .div3 {
      ul {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 1em;
        justify-content: flex-end;

        a {
          color: black;

          &.active {
            /* font-weight: 400; */
            border-bottom: 2px solid #c84869;
          }
        }
      }
    }
  }
  .copyright {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 2em;
    background-color: #213e8c;
    height: fit-content;
    padding: 10px 30px;

    p {
      color: #ddd;
    }
  }
`;
export const AdminTab = styled(TabArea)`
  width: 90%;
  margin: auto;
  @media (min-width: 700px) {
    width: 70%;
  }
  @media (min-width: 1200px) {
    width: 50%;
  }
  button {
    width: ${({ $width }) => ($width ? $width : "35%")};
    height: 50px;
    /* background-color: #c84869; */
    border-radius: ${({ $borderRadius }) =>
      $borderRadius ? $borderRadius : "8px"};
    color: white;
    border: none;
    outline: none;
    font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : "500")};
  }
  ul {
    background-color: #fcfcfc;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    width: 100%;

    input {
      height: 40px;
      word-wrap: break-word;
      padding: 10px 4px;
      border: 2px solid #ddd;
    }
    textarea {
      height: 500px;
      padding: 10px 8px;
      border: 2px solid #ddd;

      @media (min-width: 800px) {
        height: 300px;
      }
    }
  }
`;
export const Donation = styled.div`
  background-color: white;
  height: 90dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  border-radius: 30px;
  box-shadow: -4px -3px 0px 20px rgba(0, 0, 0, 0.7);
  position: fixed;
    width: 100%;
    top: 10%;

  @media (max-width: 500px) {
    overflow-y: scroll;
  }

  .close {
    cursor: pointer;
    position: relative;
    left: 40%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      margin-top: 20px;
      font-size: 17px;

      @media (max-width: 500px) {
      width: 60%;
    }
    }
  }

  h1 {
    font-size: 60px;
    color: #c84869;

    @media (max-width: 500px) {
      font-size: 40px;
    }
  }

  .inline {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 20px;
    align-items: center;

    @media (max-width: 500px) {
      flex-direction: column;
      gap: 0;
    }

    p,
    span {
      font-size: 25px;
    }
  }
`;
