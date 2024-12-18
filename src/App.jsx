import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import BackgroundMusic from "./components/BackgroundMusic"; // Import the BackgroundMusic component

function App() {
  return (
    <div className="App">
      <BackgroundMusic /> {/* Add BackgroundMusic at the top or where suitable */}
      <Header />
      <Carousel />
    </div>
  );
}

export default App;
