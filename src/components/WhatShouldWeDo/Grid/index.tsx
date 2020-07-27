import React from "react";

import { Container, Details, TitleContainer } from "./styles";

interface Props {
  title: string;
  image: string;
  index: number;
}

const Grid: React.FC<Props> = ({ title, index, image, children }) => {
  return (
    <Container>
      <Details>
        <TitleContainer>
          <div className="number">
            {index <= 9 ? `0${index + 1}` : index + 1}
          </div>
          <h2>{title}</h2>
        </TitleContainer>
        <p>{children}</p>
      </Details>
      <img src={image} alt={title} />
    </Container>
  );
};

export default Grid;
