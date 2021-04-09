import React from "react";
import HOC from "./HOC";

let ParentOfHOC = (props) => {
  console.log("in parent", props);
  return <div>This is Parent of HOC</div>;
};

export default HOC(ParentOfHOC);
