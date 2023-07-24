import "./App.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";

function App() {
  return (
    <HashRouter>
      <div>
        <div>
          {" "}
          <Navbar />
          <div className="mt-18">
            <Hero />
          </div>
          <div className="mt-18">
            <About />
          </div>
          <div className="mt-18">
            <Events />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
