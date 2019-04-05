import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={()=> {return (<h2>Home</h2>);}} />
      </BrowserRouter>
    );
  }
}

export default App;
