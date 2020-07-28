import React, { memo, ReactNode } from "react";

import { Container } from "./styles";

interface Props {
  image: string;
  title: string;
  children?: ReactNode;
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

export default memo(GridContagion);
