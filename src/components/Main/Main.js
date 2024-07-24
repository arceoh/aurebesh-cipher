import React from "react";
import Aurebesh from "../Aurebesh"
import CipherSettings from "../CipherSettings";

function Main() {
  return (
    <div className="py-8 bg-secondary-content">
      <div className="container mx-auto space-y-8">
        <Aurebesh />
        <CipherSettings />
      </div>
    </div>
  );
}

export default Main;
