import React from "react";

import { Container } from "./styles";
import Logo from "../../assets/img/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <a href="/">
          <h1>
            <img src={Logo} alt="Covid-19" />
          </h1>
        </a>
        <nav>
          <ul>
            <li>
              <a href="/" className="active">
                Overview
              </a>
            </li>
            <li>
              <a href="/">Contagion</a>
            </li>
            <li>
              <a href="/">Symptoms</a>
            </li>
            <li>
              <a href="/">Prevention</a>
            </li>
            <li>
              <a href="/" className="btn">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
