import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";

function App() {
  return (
    <Router>
      <Header />
      <Menu>
        <MenuItem classID="highlight"
                  content="About"
                  link="/" />
        <MenuItem classID="no-highlight"
                  content="Skills"
                  link="/" /> 
        <MenuItem classID="no-highlight"
                  content="Projects"
                  link="/" />  
        <MenuItem classID="no-highlight"
                  content="Contents"
                  link="/" />   
      </Menu>
    </Router>
  );
}

export default App;
