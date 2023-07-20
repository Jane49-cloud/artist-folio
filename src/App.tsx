import "./App.css";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <HashRouter>
      <div className="relative  bg-primary w-full">
        <div className="bg-hero-pattern bng-contain bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
