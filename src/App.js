import React from 'react';
import './App.css';
import Header from './Components/Header';
import AddBanner from './Components/AddBanner';
import Tile from './Components/Tile';
import Slider from './Components/Slider';
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
    <Header />
      <AddBanner />
      <Tile />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
