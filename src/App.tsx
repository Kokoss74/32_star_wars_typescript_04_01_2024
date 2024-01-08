import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Change, navItems } from "./utils";
// import Users from "./components/Users";

function App() {
  const [currentPage, setCurrentPage] = useState<string>(navItems[0]);
  // const [id, setId] = useState(1);
  const changePage: Change = (page) => setCurrentPage(page);
  return (
    <div className="container-fluid">
      {/* <Users userId={id} change={setId} /> */}
      <Header changePage={changePage} />
      <Main currentPage={currentPage} />
      <Footer />
    </div>
  );
}
export default App;