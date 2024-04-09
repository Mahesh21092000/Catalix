import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Box2 from "./components/Box2/Box2";
import Table from "./components/Table/Table";



function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Navbar/>
      <Main/>
      <Box2/>
      <Table/>
    </div>
  );
}

export default App;
