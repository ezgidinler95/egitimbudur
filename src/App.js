
import React, { Component } from "react";
//import { connect } from 'react-redux'
import { Route, } from 'react-router-dom';
import Header from './components/Header';
import Index from './components/index';
import './App.css';
import NoteCalculation from './components/Pages/NoteCalculation';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <div >
          <Route path="/" component={Header} />
          <Route exact path="/" component={Index} />
          <Route exact path="/note-calculation" component={NoteCalculation} />
        </div>
      </div >
    );
  }
}

export default (App);