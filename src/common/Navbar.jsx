import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

 class Navbar extends Component {

  state = {
    loggedout: '',
  }

  logout = () => {
    localStorage.clear();
    this.props.setUser({});
  }


  render() {

    let buttons;
    let profile;

    if(localStorage.getItem('token')){
      buttons = (
        <div>
        <Link class="nav-link" to="/" onClick={this.logout}>Logout</Link>
        </div>
      )
      profile= (
        <div>
        <Link class="nav-link" to="/profile">Profile</Link>
        </div>
      )
    } 
    else{
      buttons = (
       <div>
         <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/register">Register</Link>
        </li>
      </ul>
       </div>
      )
    }

    return (
      <div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <Link class="navbar-brand" to="/">Mak Mart</Link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          {profile}
        </li>
      </ul>
      {buttons}
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar



