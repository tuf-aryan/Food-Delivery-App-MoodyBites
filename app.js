import React from "react"; 
import ReactDOM from "react-dom/client";
const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
     [ React.createElement("h1",{},"Now You  see MY power when I clear the GSOc  💦"),
      React.createElement("h2",{},"i am a h2")
     ]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
