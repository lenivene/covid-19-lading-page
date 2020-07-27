import styled from "styled-components";

export const Container = styled.li`
  font-family: Lato, sans-serif;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.7rem 0;
  border-radius: 10px;
  box-shadow: 0px 0px 45px rgba(0, 0, 0, 0.2);
  border-bottom: 4px solid transparent;
  transition: all 250ms ease-out;

  &:hover,
  &:focus {
    border-bottom: 4px solid var(--primary-color);
    cursor: pointer;
  }

  img {
    width: 61%;
  }

  h2 {
    padding: 0.7rem 0;
    color: var(--secondary-color);
  }

  p {
    line-height: 20px;
    font-size: 14px;
    color: var(--gray-color);
    padding: 0 1.7rem;
  }
`;
