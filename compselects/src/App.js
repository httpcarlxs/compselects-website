import React, { useState } from "react";
import Home from "./Home";
import Sobre from "./Sobre";
import Header from "./components/header/header";
import Footer from "./components/footer";
import "./styles/App.css";

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    if (activePage === "sobre") {
      return <Sobre />;
    } else {
      return <Home />;
    }
  };

  return (
    <div className="background">
      <div className="container">
        <Header setActivePage={setActivePage} />
        {renderPage()}
        <Footer />
      </div>
    </div>
  );
}

export default App;
