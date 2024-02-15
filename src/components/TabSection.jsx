import React from "react";
import { useState, useEffect } from "react";
import {  Support } from "../Pages";
import Counter from "./Counter";
import Accordion from "./Accordion";
import {
  // Flex,
  TabArea,
} from "./style";

const TabPanels = [
  {
    tab: "tabA",
    bigText: "Our Achievements",
    smallText: "Summary of our achievements",
    cta: "click to view",
    backgroundColor: "#C84869",
    main: <Counter/>,
  },
  {
    tab: "tabB",
    bigText: "Our Events",
    smallText: "Our scheduled events for the month ",
    cta: "click to view",
    backgroundColor: "#2A70DE",
    main: <Accordion/>,
  },
  {
    tab: "tabC",
    bigText: "Support Us",
    smallText: "Help our cause",
    cta: "click to view",
    backgroundColor: "#213E8C",
    main: <Support/>,
  },
];

const TabSection = () => {
  const [activeTab, setActiveTab] = useState('tabA');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [innerWidth, setInnerWidth] = useState(0);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <TabArea>
      <ul>
        {TabPanels.map((tabs, index) => (
          <li
            key={index}
            onClick={() => handleTabChange(tabs.tab)}
            role="tab"
            tabIndex={activeTab === tabs.tab ? 1 : 0}
            aria-selected={activeTab === tabs.tab ? true : false}
            style={{
              width: innerWidth <= 640 ? "100%" : '33.3%',
              height: "142px",
                backgroundColor: tabs.backgroundColor,
              fontWeight: activeTab === tabs.tab ? "600" : "400",
            }}
          >
            <h1 style={{ color: activeTab === tabs.tab ? "#fff" : "#ffffffcd" }}>
              {tabs.bigText}
            </h1>
            <p style={{ color: activeTab === tabs.tab ? "#fff" : "#ffffffcd" }}>
              {tabs.smallText}
            </p>
            <span style={{ color: activeTab === tabs.tab ? "#fff" : "#ffffffcd" }}>
              {tabs.cta}
            </span>
          </li>
        ))}
      </ul>

      <>
        {TabPanels.map((tabs, index) => (
          <main key={index} id={tabs.link}>
            {activeTab === tabs.tab && <>{tabs.main}</>}
          </main>
        ))}
      </>
    </TabArea>
  );
};

export default TabSection;
