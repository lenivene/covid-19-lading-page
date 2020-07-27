import React from "react";

import { Container, Grids } from "./styles";
import HeaderCenterSection from "../HeaderCenterSection";
import Grid from "./Grid";

import ListTutorial from "../../constants/WhatShouldWeDoConstant";

const WhatShouldWeDo: React.FC = () => {
  return (
    <Container>
      <div>
        <HeaderCenterSection title="What  should we do">
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease. A newly identified type has caused
        </HeaderCenterSection>
        <Grids>
          {ListTutorial.map((tutorial, index) => (
            <Grid title={tutorial.title} image={tutorial.image} index={index}>
              {tutorial.description}
            </Grid>
          ))}
        </Grids>
      </div>
    </Container>
  );
};

export default WhatShouldWeDo;
