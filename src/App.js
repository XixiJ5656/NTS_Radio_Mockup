import React from "react";
// import Navbar from "./components/Navbar";
import NtsPicks from "./components/NtsPicks";
import NewsEvents from "./components/NewsEvents";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <NtsPicks />
      <NewsEvents />
    </div>
  );
}

export default App;
