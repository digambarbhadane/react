import React, { createContext } from "react";
import "./App.css";
import ComponentA from "./Components/Context/ComponentA";

const firstName = createContext();
const lastName = createContext();

function App() {
  return (
    <>
      <firstName.Provider value="Digambar">
        <lastName.Provider value="Bhadane">
          <ComponentA />
        </lastName.Provider>
      </firstName.Provider>
    </>
  );
}

export default App;
export { firstName, lastName };
