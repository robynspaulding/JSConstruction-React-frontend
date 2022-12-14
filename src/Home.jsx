import axios from "axios";
import { useEffect, useState } from "react";
import { AboutsIndex } from "./AboutsIndex";
import { AboutsShow } from "./AboutsShow";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { Modal } from "./Modal";
import { PortfoliosIndex } from "./PortfoliosIndex";
import { PortfoliosShow } from "./PortfoliosShow";
import { PortfolioNew } from "./PortfolioNew";
import { WoodshopsIndex } from "./WoodshopsIndex";
import { WoodshopsShow } from "./WoodshopsShow";
import { WoodshopNew } from "./WoodshopNew";

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

  const handleDestroyPortfolio = (portfolio) => {
    axios.delete("http://localhost:3000/portfolios/" + portfolio.id, +".json").then((response) => {
      setPortfolios(portfolios.filter((pf) => pf.id !== portfolio.id));
      handleHidePortfolio();
    });
  };

  //Woodshop actions
  const [woodshops, setWoodshops] = useState([]);
  const [isWoodshopShowVisable, setIsWoodshopShowVisable] = useState(false);
  const [currentWoodshop, setCurrentWoodshop] = useState({});
  const handelIndexWoodshops = () => {
    axios.get("http://localhost:3000/woodshops.json").then((response) => {
      console.log(response.data);
      setWoodshops(response.data);
    });
  };

  const handleShowWoodshop = (woodshop) => {
    setIsWoodshopShowVisable(true);
    setCurrentWoodshop(woodshop);
  };

  const handleHideWoodshop = () => {
    setIsWoodshopShowVisable(false);
  };

  const handleUpdateWoodshop = (id, params) => {
    axios.patch("http://localhost:3000/woodshops/" + id + ".json", params).then((response) => {
      const updatedWoodshop = response.data;
      setCurrentWoodshop(updatedWoodshop);

      setWoodshops(
        woodshops.map((woodshop) => {
          if (woodshop.id === updatedWoodshop.id) {
            return updatedWoodshop;
          } else {
            return woodshop;
          }
        })
      );
    });
  };

  const handleDestroyWoodshop = (woodshop) => {
    axios.delete("http://localhost:3000/woodshops/" + woodshop.id, +".json").then((response) => {
      setWoodshops(woodshops.filter((w) => w.id !== woodshop.id));
      handleHideWoodshop();
    });
  };

  useEffect(handelIndexAbouts, []);
  useEffect(handelIndexPortfolios, []);
  useEffect(handelIndexWoodshops, []);

  return (
    <div>
      <h1>Jordan Spaulding Construction</h1>
      {/* admin usage only */}
      <Login />
      <LogoutLink />
      <WoodshopNew />
      <PortfolioNew />

      <AboutsIndex abouts={abouts} onSelectAbout={handleShowAbout} />
      <Modal show={isAboutShowVisable} onClose={handleHideAbout}>
        <AboutsShow about={currentAbout} onUpdateAbout={handleUpdateAbout} />
      </Modal>

      <PortfoliosIndex portfolios={portfolios} onSelectPortfolio={handleShowPortfolio} />
      <Modal show={isPortfolioShowVisable} onClose={handleHidePortfolio}>
        <PortfoliosShow
          portfolio={currentPortfolio}
          onUpdatePortfolio={handleUpdatePortfolio}
          onDestroyPortfolio={handleDestroyPortfolio}
        />
      </Modal>

      <WoodshopsIndex woodshops={woodshops} onSelectWoodshop={handleShowWoodshop} />
      <Modal show={isWoodshopShowVisable} onClose={handleHideWoodshop}>
        <WoodshopsShow
          woodshop={currentWoodshop}
          onUpdateWoodshop={handleUpdateWoodshop}
          onDestroyWoodshop={handleDestroyWoodshop}
        />
      </Modal>
    </div>
  );
}
