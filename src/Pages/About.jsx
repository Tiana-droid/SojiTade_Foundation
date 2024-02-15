import React from 'react';
import { Footer } from "../components";
import { Header, Main } from "./style";
import { Portrait } from "../Assets";
import { Card } from "../components/style";


const About = () => {
  return (
    <>
      <Header>
        <h1 id="about">About Us</h1>
      </Header>
      <hr style={{ border: "0.5px solid #ececed" }} />
    <Main>
      <div className="pic">
      <img src={Portrait} alt="" />
      </div>
      <div className="container">
        <Card className="mission">
          <h1>Who We Are:</h1>
          <span>
            <p>
              Sojitade foundation strives to put an end to extreme poverty and
              acute illiteracy in Nigeria. Our approach involves the provision
              of educational scholarships and grants, health and emergency
              services, capacity building, community support, and development.
            </p>
            <p>
              We especially thrive on our network of both local and
              international volunteers who share in our vision of building a
              better and more prosperous Nigeria and Africa at large.
            </p>
          </span>
        </Card>
        <Card className="vision">
          <h1>How We Help:</h1>
          <span>
            <p>
              We create a collaborative and community based solutions for urgent
              social and environmental challenges in Nigeria. We strive to put
              an end to poverty and illiteracy among deprived children, youth
              and women in our community.
            </p>
            <p>
              We make emphasis on the following fundamental focal point of work:
              Education, Child Welfare, Youth Resilience, Health and Women
              Empowerment.
            </p>
          </span>
        </Card>
        <Card className="value">
          <h1>Why We Do It:</h1>
          <span>
            <p>
              In Nigeria, more than a quarter of all children live in poverty
              and are vulnerable. That is about 20 million children. Average of
              4 out of 10 children of primary school age are not privileged to
              attend school and 6 out 10 children of secondary school age are
              out of school because of the inability on the part of the parents
              to send the children to school.
            </p>
          </span>
        </Card>
      </div>
    </Main>
    <Header bgColor='#213e8c'>
      <p>
      We Need Your Support Today!
      </p>
      <button>Donate</button>
    </Header>
      <Footer />
    </>
  );
};

export default About;
