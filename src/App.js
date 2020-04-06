import React from 'react';
import './App.css';
import Header from './Components/Header';
import AddBanner from './Components/AddBanner';
import Slider from './Components/Slider';
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
    <Header />
      <AddBanner />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
