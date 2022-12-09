import axios from "axios";
import { useEffect, useState } from "react";
import { AboutsIndex } from "./AboutsIndex";
import { AboutsShow } from "./AboutsShow";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { PortfoliosIndex } from "./PortfoliosIndex";
import { WoodshopsIndex } from "./WoodshopsIndex";
import { Modal } from "./Modal";

export function Home() {
  const [abouts, setAbouts] = useState([]);
  const [isAboutShowVisable, setIsAboutShowVisable] = useState(false);
  const [currentAbout, setCurrentAbout] = useState({});

  const [portfolios, setPortfolios] = useState([]);

  const [woodshops, setWoodshops] = useState([]);

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

  const handelIndexPortfolios = () => {
    axios.get("http://localhost:3000/portfolios.json").then((response) => {
      console.log(response.data);
      setPortfolios(response.data);
    });
  };

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
        <AboutsShow about={currentAbout} />
      </Modal>
      <PortfoliosIndex portfolios={portfolios} />
      <WoodshopsIndex woodshops={woodshops} />
    </div>
  );
}
