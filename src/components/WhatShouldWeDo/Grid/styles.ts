import styled from "styled-components";

type ContainerProps = {
  toLeft?: Boolean;
};

export const Container = styled.li<ContainerProps>`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: auto auto;
  width: 100%;

  > img {
    width: 76%;
    order: 0;
  }

  &:nth-child(even) > img {
    order: -1;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-left: 115px;
    font-family: Lato, sans-serif;
    font-size: 15px;
    padding: 0.7rem 0;
    line-height: 28px;
    color: var(--gray-color);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .number {
    background-color: var(--primary-color);
    border-radius: 50%;
    font-family: "Red Hat Display", sans-serif;
    font-weight: bold;
    font-size: 44px;
    height: 75px;
    width: 75px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-family: Lato, sans-serif;
    font-size: 42px;
    margin-left: 40px;
    color: var(--secondary-color);
  }
`;
