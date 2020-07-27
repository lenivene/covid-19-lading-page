import React, { FormEvent } from "react";

import { Container, Form } from "./styles";
import Menu from "./Menu";

const Footer: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Sending...");

    setTimeout(() => {
      alert("Thanks!");
    }, 2000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Have Question in mind?
          <br />
          <strong>Let us help you</strong>
        </label>
        <div className="group">
          <input name="email" type="email" placeholder="lenivene@msn.com" />
          <button type="submit" className="btn active">
            Send
          </button>
        </div>
      </Form>
      <Menu />
      <p className="copyright">
        {new Date().getFullYear()} @ Design by{" "}
        <a href="https://dribbble.com/shamimanasrin">Shamima Nasrin</a> and code
        developed by <a href="https://github.com/lenivene">Lenivene Bezerra</a>
      </p>
    </Container>
  );
};

export default Footer;
