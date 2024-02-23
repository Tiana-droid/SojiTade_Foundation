import React, { useState } from "react";
import { Donation, Button } from "./style";
import { FaTimes } from "react-icons/fa";

const Donate = ({close}) => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };
  return (
      <Donation>
        <span className="close" onClick={close}>
            <FaTimes/>
        </span>
        <h1>Join our cause</h1>
        <section>
          <div className="inline">
            <p>Account Number:</p> <span>4091221297</span>
          </div>
          <div className="inline">
            <p>Account Name:</p> <span>Sojitade Foundation</span>
          </div>
          <div className="inline">
            <p>Bank Name:</p> <span>Polaris Bank</span>
          </div>
          <Button
            onClick={() => copyToClipBoard("Account No: 4091221297")}
          >
            Copy Acc No
          </Button>
          <p style={{color: '#1aac1a'}}>
          {copySuccess}
          </p>
        </section>
      </Donation>
  );
};

export default Donate;
