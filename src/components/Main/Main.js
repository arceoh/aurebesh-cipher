import React from "react";
import Aurebesh from "../Aurebesh";
import CipherSettings from "../CipherSettings";
import InputMessage from "../InputMessage";

export const CipherSettingsContext = React.createContext();

function Main() {
  const [cipherSettings, setCipherSettings] = React.useState(6);

  return (
    <div className="py-8 bg-secondary-content">
      <div className="container mx-auto space-y-8">
        <CipherSettingsContext.Provider
          value={{ cipherSettings, setCipherSettings }}
        >
          <Aurebesh />
          <CipherSettings />
          <InputMessage />
        </CipherSettingsContext.Provider>
      </div>
    </div>
  );
}

export default Main;
