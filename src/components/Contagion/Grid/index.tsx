import React from "react";

import { Container } from "./styles";

interface Props {
  image: string;
  title: string;
}

const GridContagion: React.FC<Props> = ({ image, title, children }) => {
  return (
    <Container>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{children}</p>
    </Container>
  );
};

export default GridContagion;
