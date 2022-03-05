import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("hi");
  return <div>{text}</div>;
};

export default App;
