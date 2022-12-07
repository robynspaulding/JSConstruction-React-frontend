import axios from "axios";
import { useEffect, useState } from "react";
import { AboutsIndex } from "./AboutsIndex";
import { PortfoliosIndex } from "./PortfoliosIndex";
import { WoodshopsIndex } from "./WoodshopsIndex";

export function Home() {
  const [abouts, setAbouts] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [woodshops, setWoodshops] = useState([]);

  const handelIndexAbouts = () => {
    axios.get("http://localhost:3000/abouts.json").then((response) => {
      console.log(response.data);
      setAbouts(response.data);
    });
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
      <h1>Welcome to React!</h1>
      <AboutsIndex abouts={abouts} />
      <PortfoliosIndex portfolios={portfolios} />
      <WoodshopsIndex woodshops={woodshops} />
    </div>
  );
}
