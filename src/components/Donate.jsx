import React from "react";

const Donate = () => {
  return (
    <>
      <button onClick={() => navigator.clipboard.writeText("acc no")}>
        Copy
      </button>
    </>
  );
};

export default Donate;
