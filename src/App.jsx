import { useState } from "react";
import { Navbar } from "./components/Header";
import { RunningText } from "./components/Section";
import CurrencyConverter from "./components/CurrencyConverter.jsx";
import { Footer } from "./components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="app-container">
      {/* Self Closing digunakan ketika memanggil komponen yang tidak mempunyai children */}
      <Navbar />
      <main className="content">
        <RunningText />
        <CurrencyConverter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
