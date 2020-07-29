import styled from "styled-components";

export const Container = styled.section`
  font-family: "Red Hat Display", sans-serif !important;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  > div {
    max-width: 1097px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 992px) {
    > div {
      flex-direction: column;
      padding-right: 15px;
      padding-left: 15px;
      margin-bottom: 0;
    }
  }
`;

export const Virus = styled.img`
  width: 25% !important;
  position: absolute;
  user-select: none;
  bottom: -25%;
  left: 0;
  z-index: -1;
`;

export const Grids = styled.ul`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: auto auto auto;
  width: 100%;
  margin-top: 1.7rem;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;

    li {
      margin-bottom: 4.7rem;
    }
  }
`;
