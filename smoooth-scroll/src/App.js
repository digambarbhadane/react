import "./App.css";
import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";

function App() {
  return (
    <>
      <Navbar />

      <Section1 id="section1" />

      <Section2 id="section2" />

      <Section3 id="section3" />

      <Section4 id="section4" />

      <Section5 id="section5" />
    </>
  );
}

export default App;
