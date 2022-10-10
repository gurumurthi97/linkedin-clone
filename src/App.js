import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const [content, setContent] = useState("Home");

  return (
    <div className="App" style={{ paddingTop: 52 }}>
      <Navbar content={content} setContent={setContent} />
      <Main content={content} />
    </div>
  );
}

export default App;
