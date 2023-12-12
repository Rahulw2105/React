import React from "react";
import ReactDOM from "react-dom/client";

const FirstComponent = () => {
  return (
    <div>
      <h1> First Component </h1>
    </div>
  );
};

const SecondComp = () => {
  return (
    <div>
      <FirstComponent />
      <h1> Second component </h1>
    </div>
  );
};

const jsxHeading = <h1> This is jsx heading</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<SecondComp />);
