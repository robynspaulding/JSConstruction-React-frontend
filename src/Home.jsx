import axios from "axios";
import { useEffect, useState } from "react";
import { AboutsIndex } from "./AboutsIndex";
import { AboutsShow } from "./AboutsShow";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { PortfoliosIndex } from "./PortfoliosIndex";
import { PortfoliosShow } from "./PortfoliosShow";
import { WoodshopsIndex } from "./WoodshopsIndex";
import { Modal } from "./Modal";

export function Home() {
  //About actions
  const [abouts, setAbouts] = useState([]);
  const [isAboutShowVisable, setIsAboutShowVisable] = useState(false);
  const [currentAbout, setCurrentAbout] = useState({});

  const handelIndexAbouts = () => {
    axios.get("http://localhost:3000/abouts.json").then((response) => {
      console.log(response.data);
      setAbouts(response.data);
    });
  };

  const handleShowAbout = (about) => {
    setIsAboutShowVisable(true);
    setCurrentAbout(about);
  };

  const handleHideAbout = () => {
    setIsAboutShowVisable(false);
  };

  const handleUpdateAbout = (id, params) => {
    axios.patch("http://localhost:3000/abouts/" + id + ".json", params).then((response) => {
      const updatedAbout = response.data;
      setCurrentAbout(updatedAbout);

      setAbouts(
        abouts.map((about) => {
          if (about.id === updatedAbout.id) {
            return updatedAbout;
          } else {
            return about;
          }
        })
      );
    });
  };

  //Portfolio actions
  const [portfolios, setPortfolios] = useState([]);
  const [isPortfolioShowVisable, setIsPortfolioShowVisable] = useState(false);
  const [currentPortfolio, setCurrentPortfolio] = useState({});

  const handelIndexPortfolios = () => {
    axios.get("http://localhost:3000/portfolios.json").then((response) => {
      console.log(response.data);
      setPortfolios(response.data);
    });
  };

  const handleShowPortfolio = (portfolio) => {
    setIsPortfolioShowVisable(true);
    setCurrentPortfolio(portfolio);
  };

  const handleHidePortfolio = () => {
    setIsPortfolioShowVisable(false);
  };

  const handleUpdatePortfolio = (id, params) => {
    axios.patch("http://localhost:3000/portfolios/" + id + ".json", params).then((response) => {
      const updatedPortfolio = response.data;
      setCurrentPortfolio(updatedPortfolio);

      setPortfolios(
        portfolios.map((portfolio) => {
          if (portfolio.id === updatedPortfolio.id) {
            return updatedPortfolio;
          } else {
            return portfolio;
          }
        })
      );
    });
  };

  //Woodshop actions
  const [woodshops, setWoodshops] = useState([]);

  const handelIndexWoodshops = () => {
    axios.get("http://localhost:3000/woodshops.json").then((response) => {
      console.log(response.data);
      setWoodshops(response.data);
    });
  };

  useEffect(handelIndexAbouts, []);
  useEffect(handelIndexPortfolios, []);
  useEffect(handelIndexWoodshops, []);

  return (
    <div>
      <h1>Jordan Spaulding Construction</h1>
      <Login />
      <LogoutLink />
      <AboutsIndex abouts={abouts} onSelectAbout={handleShowAbout} />
      <Modal show={isAboutShowVisable} onClose={handleHideAbout}>
        <AboutsShow about={currentAbout} onUpdateAbout={handleUpdateAbout} />
      </Modal>
      <PortfoliosIndex portfolios={portfolios} onSelectPortfolio={handleShowPortfolio} />
      <Modal show={isPortfolioShowVisable} onClose={handleHidePortfolio}>
        <PortfoliosShow portfolio={currentPortfolio} onUpdatePortfolio={handleUpdatePortfolio} />
      </Modal>
      <WoodshopsIndex woodshops={woodshops} />
    </div>
  );
}
