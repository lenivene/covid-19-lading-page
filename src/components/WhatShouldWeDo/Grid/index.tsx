import React, { memo, ReactNode, useMemo } from "react";

import { Container, Details, TitleContainer } from "./styles";

interface Props {
  title: string;
  image: string;
  index: number;
  children?: ReactNode;
}

const Grid: React.FC<Props> = ({ title, index, image, children }) => {
  const indexCount = useMemo<string>(
    () => (index <= 9 ? `0${index + 1}` : String(index + 1)),
    [index]
  );

  return (
    <Container>
      <Details>
        <TitleContainer>
          <div className="number">{indexCount}</div>
          <h2>{title}</h2>
        </TitleContainer>
        <p>{children}</p>
      </Details>
      <img src={image} alt={title} />
    </Container>
  );
};

export default memo(Grid);
