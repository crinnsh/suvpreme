import React, { useState, useContext } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const Context = React.createContext();

import {
  About,
  Contact,
  Main,
  Navbar,
  Profile,
  Carmod,
  Roster,
} from "./components";

const App = () => {
  const [selectedCar, selectCar] = useState(false);

  return (
    <Context.Provider value={[selectedCar, selectCar]}>
      <Router>
        <section className="px-32">
          <Navbar />
        </section>
        <section className="px-32 mt-2">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/carmod" element={<Carmod />} />
          </Routes>
        </section>
      </Router>
    </Context.Provider>
  );
};

export default App;
