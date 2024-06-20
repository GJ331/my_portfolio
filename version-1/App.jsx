import React, { Component } from "react";

// import Header from "./components/Header";
import Banner from './components/Banner';
import Nav from "./components/Nav";
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

export default class App extends Component {
  render() {
    return (
      <div className="bg-darkBg overflow-hidden">
        <Banner />
        <Nav />
        <About />
        <Services />
        <Work />
        <Contact />
      </div>
    );
  }
}
