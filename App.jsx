import React from "https://esm.sh/react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
