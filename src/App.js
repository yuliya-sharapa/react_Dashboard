import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div id="wrapper">
      <Sidebar items={["Item 1", "Item2", "Item 3"]} />
      <div id="content-wrapper" className="d-flex flex-column">
        <Content></Content>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
