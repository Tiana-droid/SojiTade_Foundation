import React from "react";
import { Main } from "./style";
import { Help } from "../Assets";
import { Button } from "../components/style";

const Support = () => {
  return (
    <Main>
      <div className="cause">
        <div className="content">
          <span>
          <h1>Contribute to our cause </h1>
          <p> - Empowering people</p>
          <p> - Helping children in need</p>
          </span>

          <div>
            <Button>Donate</Button>
          </div>
        </div>
        <div className="cause-pic">
          <img src={Help} alt="" />
        </div>
      </div>
    </Main>
  );
};

export default Support;
