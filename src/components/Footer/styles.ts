import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(180deg, #fff 0%, #fff1f4 100%);
  padding-bottom: 1rem;
  font-family: Lato, sans-serif;
  text-align: center;
  font-size: 13px;
  color: var(--gray-color);
  width: 100%;

  a {
    color: var(--gray-color);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;

  label {
    font-size: 3em;
    color: var(--secondary-light-color);

    strong {
      font-weight: bold;
    }
  }

  .group {
    display: flex;
    background: #fff;
    max-width: 790px;
    border-radius: 25px;
    padding: 0.7rem;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    margin: 1.7rem auto 2.7rem;

    input {
      background: transparent;
      outline: none;
      width: 100%;
      padding: 0 1.7rem 0 1rem;
    }

    .btn {
      padding-right: 3.7rem;
      padding-left: 3.7rem;
    }
  }
`;
