import styled from "styled-components";

export const Container = styled.section`
  font-family: "Red Hat Display", sans-serif !important;
  display: flex;
  max-width: 1097px;
  min-height: 812px;
  height: auto;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  position: relative;

  img {
    position: absolute;
    right: -13.5rem;
    order: 1;
    max-width: 100%;
    height: auto;
    width: 76%;
    z-index: -1;
  }
`;

export const Details = styled.div`
  max-width: 633px;
  width: 100%;
  order: 0;

  h2 {
    font-size: 32px;
    font-weight: bold;
    color: var(--primary-color);
  }

  h3 {
    font-size: 52px;
    font-weight: bold;
    color: var(--secondary-color);
  }

  p {
    font-family: Lato, sans-serif;
    font-size: 24px;
    padding: 1.2rem 7.7rem 1.2rem 0;
    margin-bottom: 1.7rem;
    flex-wrap: nowrap;
    color: var(--gray-color);
  }
`;
