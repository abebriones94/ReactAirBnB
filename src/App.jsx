import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        // key is needed anytime we use .map
        key={item.id}
        {...item}
        // 'Spread item into components props'... Takes the properties of the 'data' and creates a separate prop each for them
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
