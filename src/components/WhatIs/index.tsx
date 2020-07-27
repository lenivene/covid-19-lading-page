import React from "react";

import { Container, Virus, Details } from "./styles";
import bg from "../../assets/img/coronavirus.svg";
import virus from "../../assets/img/coronavirus-low-opacity.svg";

const WhatIs: React.FC = () => {
  return (
    <Container>
      <Virus src={virus} alt="virus" />
      <div>
        <picture>
          <img src={bg} alt="Coronavirus" />
        </picture>
        <Details>
          <h2>What Is Covid-19</h2>
          <h3>Coronavirus</h3>
          <p>
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type has caused a recent
            outbreak of respiratory illness now called COVID-19.Lauren Sauer,
            M.S., the director of operations with the Johns Hopkins Office of
            Critical Event Preparedness and Response
          </p>
          <span className="fix">
            <a href="/" className="btn">
              Learn more
            </a>
          </span>
        </Details>
      </div>
    </Container>
  );
};

export default WhatIs;
