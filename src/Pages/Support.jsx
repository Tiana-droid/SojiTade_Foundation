import React, {useState} from "react";
import { Main } from "./style";
import { Help } from "../Assets";
import { Button } from "../components/style";
import Donate from "../components/Donate";

const Support = () => {
  const [showDonation, setShowDonation] = useState(false);
  const Donation = () => {
    setShowDonation(!showDonation);
  };
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
            <Button onClick={Donation}>Donate</Button>
          </div>
        </div>
        <div className="cause-pic">
          <img src={Help} alt="" />
        </div>
      </div>

      {showDonation&&<Donate close={Donation}/>}
    </Main>
  );
};

export default Support;
