
import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePages';
import { Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends React.Component {
 
  render(){
    
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route path="/users/:id" component={UserProfilePage} />
      </div>
    )
  }
}

export default App;
