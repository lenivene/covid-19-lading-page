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
    margin: 3.7rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Grids = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
