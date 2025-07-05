import React from "https://esm.sh/react";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
      <h1>Harshit Saini</h1>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
