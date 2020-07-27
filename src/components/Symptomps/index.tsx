import React from "react";

import { Container, Virus } from "./styles";
import HeaderCenterSection from "../HeaderCenterSection";
import virus from "../../assets/img/coronavirus-lp-small.svg";
import symptomps from "../../assets/img/symptomps.svg";

const Symptomps: React.FC = () => {
  return (
    <Container>
      <div>
        <Virus src={virus} alt="virus" />
        <HeaderCenterSection title="Symptomps">
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type has caused a recent
          outbreak of respiratory
        </HeaderCenterSection>
        <img src={symptomps} alt="symptomps" />
      </div>
    </Container>
  );
};

export default Symptomps;
