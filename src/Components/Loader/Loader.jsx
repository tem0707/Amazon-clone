import React from 'react'
import { PulseLoader } from "react-spinners";
function Loader() {
  return (
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh"
    }}>
      <PulseLoader color="#36b7d7" />
    </div>
  );
}

export default Loader
