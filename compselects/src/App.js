import React, { useState } from "react";
import Home from "./Home";
import Eventos from "./Eventos";
import Sobre from "./Sobre";
import Contato from "./Contato";
import Blog from "./Blog";
import Submission from "./Submission";
import Header from "./components/header/header";
import Footer from "./components/footer";
import "./styles/App.css";

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    if (activePage === "sobre") {
      return <Sobre />;
    } else if (activePage === "eventos") {
      return <Eventos />;
    } else if (activePage === "contato") {
      return <Contato />;
    } else if (activePage === "blog") {
      return <Blog />;
    } else if (activePage === "submissoes") {
      return <Submission />;
    }else {
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
