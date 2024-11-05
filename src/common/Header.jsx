import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from '../components/Home';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Forget from '../components/Forget';
import Profile from './../components/Profile';
import Reset from './../components/Reset';
import axios from 'axios';

class Header extends Component {
    state = {
        user: {}
    };

    componentDidMount() {
        const token = localStorage.getItem('token');
        if (token) {
            axios
                .get('/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((response) => {
                    this.setUser(response.data); // Ensure user data is passed correctly
                    console.log("User data retrieved:", response.data); // Log user data
                })
                .catch((error) => {
                    console.log("Error retrieving user data:", error);
                });
        } else {
            console.log("No token found, user is not logged in.");
        }
    }

    setUser = (user) => {
        this.setState({ user: user });
    };

    render() {
        return (
            <h1>
                <Router>
                    <div>
                        <Navbar user={this.state.user} setUser={this.setUser} />
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/login" element={<Login user={this.state.user} setUser={this.setUser} />} />
                            <Route exact path="/register" element={<Register user={this.state.user} setUser={this.setUser} />} />
                            <Route exact path="/forget" element={<Forget />} />
                            <Route exact path="/reset/:id" element={<Reset />} />
                            <Route exact path="/profile" element={<Profile user={this.state.user} />} />
                        </Routes>
                    </div>
                </Router>
            </h1>
        );
    }
}

export default Header;
