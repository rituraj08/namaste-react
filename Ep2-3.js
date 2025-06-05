import React from "react"; // this is coming from node_modules
import ReactDOM from "react-dom";

const parent = React.createElement(
  "div",
  { id: "parent" },

  React.createElement(
    "div",
    { id: "child" },

    React.createElement("h1", { id: "child2" }, "I am h1 tag....")
  )
);

const heading = (
    <h1> HII I am React Component</h1>
)



const TitleComponent = () => (
    <div>
      <h1>Hello from Title Component!</h1>
    </div>
  );

  const HeadingComponent = () => {
    return (
        <div>
            {heading}
            <TitleComponent/>
             <h1>Hiello from Heading Component!..</h1>
        </div>
        )
  };

const HeadingComponent2 = () => (
  <div>
     <TitleComponent/>
    <h1>Hello from JSX code!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
