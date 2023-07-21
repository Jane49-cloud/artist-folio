import "./App.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
