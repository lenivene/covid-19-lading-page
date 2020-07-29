import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;

  div {
    display: flex;
    font-weight: bold;
    max-width: 1097px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  @media screen and (max-width: 992px) {
    div {
      flex-direction: column;
      padding: 1.7rem;
    }
  }
`;

export const Menu = styled.nav`
  > ul {
    display: flex;

    li {
      margin-right: 2rem;

      a {
        color: var(--secondary-color);
      }

      a:hover,
      a:focus {
        color: var(--primary-color);
        outline: none;
      }
    }
  }

  @media screen and (max-width: 992px) {
    > ul {
      margin: 0.7rem 15px;
    }
  }
`;
