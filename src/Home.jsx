import axios from "axios";
import { useEffect, useState } from "react";
import { AboutsIndex } from "./AboutsIndex";
import { PortfoliosIndex } from "./PortfoliosIndex";

export function Home() {
  const [abouts, setAbouts] = useState([]);
  const [portfolios, setPortfolios] = useState([]);

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

  useEffect(handelIndexAbouts, []);
  useEffect(handelIndexPortfolios, []);
  return (
    <div>
      <h1>Welcome to React!</h1>
      <AboutsIndex abouts={abouts} />
      <PortfoliosIndex portfolios={portfolios} />
    </div>
  );
}
