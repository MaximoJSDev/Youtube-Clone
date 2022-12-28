import { useState } from "react";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Main from "./components/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Aside />
      <Main />
    </>
  );
}

export default App;
