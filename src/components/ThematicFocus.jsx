import React from "react";
import { Outer } from "./style";

const Focus = [
  {
    id: 1,
    title: "End Poverty SDG1:",
    list: [
      "Sojitade’s Entrepreneurship boot camp 1.0 -3.0",
      "World youth skills day workshop.",
      "Visit to Ondo State Orphanage Home",
    ],
  },
  {
    id: 2,
    title: "Good Health and Well-Being SDG3:",
    list: [
      "Campaign to promote Mental Health and Well-Being",
      "Campaign to strengthen the prevention of drug abuse and harmful use of alcohol ",
    ],
  },
  {
    id: 3,
    title: "Quality Education SDG4: ",
    list: ["St Finbarr’s project", "Education Drive project."],
  },
  {
    id: 4,
    title: "Gender Equality and Women and Girls Empowerment SDG5: ",
    list: [
      "Girls and Puberty Initiative",
      "Commemoration of international day of girl child",
      "Pad tour project",
    ],
  },
];

const ThematicFocus = () => {
  return (
    <Outer className="focus">
        <h1>Our Thematic Focus</h1>
      <section>
        {Focus.map((f) => (
          <div key={f.id} className="content">
            <b>{f.title}</b>
            <ul>
            {(f.list.map((li) => <li>{li}</li>))}
            </ul>
          </div>
        ))}
      </section>
    </Outer>
  );
};

export default ThematicFocus;
