import React from "react";

import { Container, Details } from "./styles";
import banner from "../../assets/img/spotlight-banner.svg";

const Spotlight: React.FC = () => {
  return (
    <Container>
      <img src={banner} alt="covid-19 alert" />
      <Details>
        <h2>COVID-19 Alert</h2>
        <h3>Stay at Home quarantine To stop Corona virus</h3>
        <p>
          There is no specific medicine to prevent or treat coronavirus disease
          (COVID-19). People may need supportive care to.
        </p>
        <a href="/" className="btn active">
          Let Us Help
        </a>
      </Details>
    </Container>
  );
};

export default Spotlight;
