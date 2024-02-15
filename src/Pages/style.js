import styled from "styled-components";
import { Background } from "../Assets";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 70px;

  .check_div {
    display: flex;
    align-items: center;
    gap: 2px;
  }
`;
export const Header = styled.header`
  width: 99%;
  padding: 10px;
  height: ${({ height }) => (height ? height : "200px")};
  margin: 50px auto 0px auto;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
  display: flex;
  flex-direction: ${({ view }) => (view ? "row" : "column")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: center;
  gap: ${({ gap }) => (gap ? gap : "1em")};
  color: #ddd;

  h1 {
    /* font-size: clamp(60px, 8vw, 80px); */
    font-size: clamp(35px, 6vw, 65px);
    color: #213e8c;
  }
  #back {
    fill: green;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid green;
    padding: 15px;
  }
  p {
    color: white;
    font-size: clamp(20px, 4vw, 40px);
  }

  button {
    padding: 15px 52px;
    border: none;
    outline: none;
    color: #213e8c;
    font-size: 17px;

    &:hover {
      color: white;
      background-color: #0e2973;
    }
  }
`;
export const Main = styled.section`
  width: ${({ width }) => (width ? width : "100%")};
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  @media (min-width: 1200px) {
    width: 94%;
    flex-direction: row;
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

  //About us styles
  .pic {
    width: 100%;
    height: 88vh;

    @media (min-width: 1024px) {
      width: 70%;
    }
    img {
      width: 100%;
      height: inherit;
      object-fit: cover;
      object-position: center;
    }
  }

  .container {
    width: 100%;
    height: fit-content;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    gap: 2em;
    justify-content: center;
    align-items: center;
    background-color: rgba(234, 234, 234, 0.6);
    padding: 20px;

    .mission,
    .vision,
    .value {
      background-color: white;
      width: 100%;
      height: fit-content;
      border-radius: 5px;
      padding: 10px 20px;
      display: flex;
      flex-direction: column;
      gap: 1em;

      @media (min-width: 768px) {
        width: 46%;
      }

      h1 {
        font-weight: 700;
        color: #213e8c;
        font-size: 23px;
      }

      span {
        display: flex;
        flex-direction: column;
        gap: 1em;
      }

      p {
        font-size: 17px;
        text-align: justify;
        font-weight: 500;
      }
    }
  }

  //Event styles
  .event-wrapper {
    width: 70%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 2em;

    i {
      text-align: center;
    }

    @media (max-width: 500px) {
      width: 100%;
    }

    @media (min-width: 1024px) {
      width: 50%;
    }

    span {
      font-size: 14px;
    }
    .outer-div {
      width: 100%;
      height: fit-content;
      padding: 20px 15px;
      border-bottom: 1px solid #ddd;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;

      &:hover {
        border-bottom: 1px solid #c84869;
        h3,
        span {
          color: #c84869;
        }
        svg {
          fill: #c84869;
        }
      }

      .date,
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
        width: 100%;
      }

      p {
        margin-top: 30px;
      }
    }
  }

  //Support styles
  .cause {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: 1100px) {
      flex-wrap: wrap;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2em;
      padding: 20px;
      width: 100%;
      text-align: center;

      @media (min-width: 1100px) {
        width: 40%;
        text-align: left;
      }
    }

    h1 {
      font-size: clamp(30px, 6vw, 40px);
    }

    p {
      font-size: clamp(15px, 4vw, 20px);
    }

    .cause-pic {
      width: 100%;
      height: 61vh;

      img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
        object-position: center;
      }

      @media (min-width: 1100px) {
        width: 60%;

        img {
          width: 100%;
        }
      }
    }
  }
`;
export const Main2 = styled(Main)`
  width: 100%;

  #news_img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center;
  }
  p {
    font-size: 18px;
    font-weight: 500;
  }
  @media (min-width: 1200px) {
    width: 80%;
    flex-direction: column;
  }
`;
export const Pic = styled.div`
  width: 100%;
  height: fit-content;
  background-image: linear-gradient(
      to right,
      rgba(234, 234, 234, 0) 0%,
      rgba(234, 234, 234, 0.8) 100%
    ),
    url(${Background});
  background-position: left top;
  background-size: cover;
  margin-top: 4em;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;

  @media (max-width: 500px) {
    padding: 30px 2px;
  }

  h1 {
    color: #213e8c;
    font-size: clamp(20px, 4vw, 40px);
  }

  @media (min-width: 1024px) {
    align-items: flex-end;
  }
`;
export const Form = styled.form`
  width: 100%;
  background-color: rgba(254, 254, 254, 0.8);
  padding: 20px;
  border-radius: 18px;
  float: right;
  transition: 4s transform;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 50px;

  @media (min-width: 600px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
  @media (min-width: 1500px) {
    width: 30%;
  }

  & input,
  & textarea {
    width: 100%;
    height: 60px;
    border-radius: 5px;
    padding-left: 9px;
    outline: none;
    border: 2px solid #ececec;

    &:focus-visible {
      border: 2px solid #ccccccd4 !important;
    }
  }

  & textarea {
    height: 180px;
    padding-top: 5px;
  }

  & form {
    width: 100%;
  }

  button {
    width: 100%;
    background-color: #213e8c;
    height: 35px;
    border-radius: 20px;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    font-size: 18px;
  }
`;
export const AdminSection = styled.section`
  width: 95%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BackDrop = styled.div`
  width: 100%;
  height: 180vh;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  .btn {
    margin-top: 0em;
  }
  span {
    position: relative;
    top: 20px;
    left: 90%;
    font-weight: 600;
    font-size: 18px;
    padding: 7px;
    background-color: #213e8c21;
    border-radius: 4px;
    color: #000;
    height: 36px;
    text-align: center;
    width: 63px;

    @media (max-width: 500px) {
      left: 77%;
    }
  }

  .prompt {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    margin-top: 4rem;

    .prompt_btn {
      width: 90%;
      display: flex;
      justify-content: space-between;

      @media (min-width: 768px) {
        width: 50%;
      }
    }

    a {
      width: ${({ width }) => (width ? width : "35%")};
      height: 50px;
      border: 1px solid #c84869;
      border-radius: ${({ borderRadius }) =>
        borderRadius ? borderRadius : "8px"};
      color: #c84869;
      outline: none;
      font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "500")};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
