import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: center;
  text-align: center;
  max-width: 460px;
  width: 100%;

  h2 {
    font-size: 29px;
    font-weight: bold;
    color: var(--primary-color);
  }

  h3 {
    font-size: 50px;
    font-weight: bold;
    color: var(--secondary-color);
  }

  p {
    font-family: Lato, sans-serif;
    font-size: 15px;
    padding: 0.7rem 0;
    line-height: 28px;
    color: var(--gray-color);
  }

  .fix {
    display: flex;
  }
`;
