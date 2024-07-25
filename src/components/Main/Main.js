import React from "react";
import Aurebesh from "../Aurebesh"
import CipherSettings from "../CipherSettings";
import InputMessage from "../InputMessage";

function Main() {
  return (
    <div className="py-8 bg-secondary-content">
      <div className="container mx-auto space-y-8">
        <Aurebesh />
        <CipherSettings />
        <InputMessage />
      </div>
    </div>
  );
}

export default Main;
