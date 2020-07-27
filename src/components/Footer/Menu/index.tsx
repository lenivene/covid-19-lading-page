import React from "react";
import { FaFacebookF, FaYoutube, FaVimeoV, FaTwitter } from "react-icons/fa";

import { Container, Menu } from "./styles";
import Logo from "../../../assets/img/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <a href="/">
          <h1>
            <img src={Logo} alt="Covid-19" />
          </h1>
        </a>
        <Menu>
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
          </ul>
        </Menu>
        <Menu>
          <ul>
            <li>
              <a href="/">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="/">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="/">
                <FaVimeoV />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </Menu>
      </div>
    </Container>
  );
};

export default Header;
