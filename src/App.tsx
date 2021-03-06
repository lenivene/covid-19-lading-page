import React from "react";

// Components
import Header from "./components/Header";
import Spotlight from "./components/Spotlight";
import WhatIs from "./components/WhatIs";
import Contagion from "./components/Contagion";
import Symptomps from "./components/Symptomps";
import WhatShouldWeDo from "./components/WhatShouldWeDo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Spotlight />
      <WhatIs />
      <Contagion />
      <Symptomps />
      <WhatShouldWeDo />
      <Footer />
    </>
  );
}

export default App;
