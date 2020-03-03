import React from "react";
import SayHi from "./SayHi";
import CurrentTime from "./CurrentTime";

function App() {
  return (
    <>
      <CurrentTime color="#bada55" />
      <SayHi name="React" />
      <SayHi name="TypeScript" />
    </>
  );
}

export default App;
