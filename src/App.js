import React from 'react';
import './App.css';

import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Home exact path="/" />
        <About exact path="/about"/>
        <Skills exact path="/skills" />
        <Projects exact path="/projects" />
        <Contact exact path="/contact" />
      </Switch>
    </Router>
  );
}

export default App;
