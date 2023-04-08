import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./Containers";
import { Brand, CTA, Navbar } from "./components";

const App = () => {
  return (
    <div>
      <div
        className="h-full bg-gradient-to-tr from-rgba(0, 40, 83, 1) to-rgba(4, 12, 24, 1) via-transparent via-opacity-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%)",
        }}
      >
        <Navbar />
        <Header />
      </div>

      <Brand />
      <div
        
      >
        <WhatGPT3 />
      </div>
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
