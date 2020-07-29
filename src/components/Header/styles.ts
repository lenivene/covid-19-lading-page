import styled from "styled-components";

export const Container = styled.header`
  background: linear-gradient(180deg, #fff1f4 0%, #fff 100%);
  width: 100%;
  min-height: 127px;

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

  .active {
    color: var(--primary-color);
  }

  nav > ul {
    display: flex;

    li {
      margin-right: 2rem;

      a {
        color: var(--secondary-color);
      }

      a:hover,
      a:focus,
      a.btn {
        color: var(--primary-color);
        outline: none;
      }
    }
  }

  @media screen and (max-width: 992px) {
    div {
      flex-direction: column;
      margin-top: 0.7rem;
    }
  }

  @media screen and (max-width: 600px) {
    nav > ul {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-areas:
        "menu menu"
        "menu menu"
        "contact contact";
      grid-template-rows: auto;

      li:last-child {
        margin-top: 1.7rem;
        grid-area: contact;
        text-align: center;
      }
    }
  }
`;
