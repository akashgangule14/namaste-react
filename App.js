const heading = React.createElement(
    "h1", 
    { id: "heading"}, 
    "Hello World from React!"
);

const heading2 = React.createElement(
    "h2",
    {
      id: "title",
    },
    "Heading 2"
  );

  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading2]
  );

  console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);