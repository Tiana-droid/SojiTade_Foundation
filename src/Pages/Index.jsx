import React from "react";
import styled from "styled-components";
import {
  Hero,
  TabSection,
  Testimonies,
  Gallery,
  Footer,
  ThematicFocus,
} from "../components/index.js";


const Main = styled.div`
  width: 100%;
  background-color: white;
  position: absolute;
  top: 86%;
  margin: auto;
  height: fit-content;

  @media (min-height: 1300px) {
    top: 70%;
  }
`;


const Index = () => {
  return (
    <div>
      <Hero />
      <Main>
        <TabSection />
        <ThematicFocus />
        <Testimonies />
        <Gallery />
        <Footer />
      </Main>
    </div>
  );
};

export default Index;
