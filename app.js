import React from "react";
import ReactDOM from "react-dom/client";

// const jsxHeading = <h1 className="head">This is my jsx code</h1>;
// console.log(jsxHeading);
const Title = () => <h1>Phle aa jao</h1>;
const number = 99887800;
const Heading = () => (
  <div id="parent">
    <Title />
    <h1>{number}</h1>
    {number}
    {console.log("heloo mitro")}
    <h1 className="head">This is functional componant</h1>
  </div>
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Heading />);




