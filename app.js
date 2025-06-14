// const heading = React.createElement("h1", { id: "heading" }, "hello world");
// const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
     [ React.createElement("h1",{},"I am h1 heading"),
      React.createElement("h2",{},"i am a h2")
     ]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
