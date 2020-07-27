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
    margin: 3.7rem auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    user-select: none;
    width: 88%;
  }
`;

export const Virus = styled.img`
  width: 110% !important;
  position: absolute;
  user-select: none;
  bottom: 25%;
  left: -5%;
  z-index: -1;
`;
