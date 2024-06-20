import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero/>
        <Skills/>
        <Portfolio/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}
