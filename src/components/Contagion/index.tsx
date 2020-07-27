import React from "react";

import { Container, Virus, Grids } from "./styles";
import HeaderCenterSection from "../HeaderCenterSection";
import Grid from "./Grid";
import virus from "../../assets/img/coronavirus-low-opacity.svg";
import airTransmission from "../../assets/img/air-transmission.svg";
import humanContacts from "../../assets/img/human-contacts.svg";
import containtedObjects from "../../assets/img/containted-objects.svg";

const Contagion: React.FC = () => {
  return (
    <Container>
      <div>
        <Virus src={virus} alt="virus" />
        <HeaderCenterSection title="Contagion">
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type
        </HeaderCenterSection>
        <Grids>
          <Grid title="Air Transmission" image={airTransmission}>
            Objectively evolve tactical expertise before extensible initiatives.
            Efficiently simplify
          </Grid>
          <Grid title="Human Contacts" image={humanContacts}>
            Washing your hands is one of thesimplest ways you can protect
          </Grid>
          <Grid title="Containted Objects" image={containtedObjects}>
            Use the tissue while sneezing,In this way, you can protect your
            droplets.
          </Grid>
        </Grids>
      </div>
    </Container>
  );
};

export default Contagion;
