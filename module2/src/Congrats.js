import React from "react";

function Congrats({ success = false }) {
  if (success) {
    return <dev data-test="component-congrats"></dev>;
  } else {
    return null;
  }
}

export default Congrats;
