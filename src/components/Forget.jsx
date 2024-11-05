import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class Forget extends Component {
  state = {
    email: '',
    message: '',
    variant: ''  // 'success' or 'danger' for alert styling
  }

  //Forget Form Submit
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email
    }

    axios.post('/forgetpassword', data)
      .then((response) => {
        this.setState({
          message: response.data.message,
          variant: 'success'  // Set success variant
        });
        document.getElementById("forgetform").reset();
      })
      .catch((error) => {
        this.setState({
          message: error.response.data.message,
          variant: 'danger'  // Set danger variant
        });
      });
  }

  render() {
    // Show message alert
    let messageAlert = "";
    if (this.state.message) {
      messageAlert = (
        <div>
          <div className={`alert alert-${this.state.variant} fs-6`} role='alert'>
            {this.state.message}
          </div>
        </div>
      )
    }

    return (
      <div>
        <div><br></br><br></br>
          <div className="row">
            <div className="container mt-5 col-lg-4 offset-lg-4 jumbotron">
              <h3 className="text-center mb-5 fs-1">Forget Password</h3>

              <form onSubmit={this.formSubmit} id='forgetform'>
                {messageAlert}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fs-3">Email Address</label>
                  <input 
                    type="email" 
                    name='email' 
                    className="form-control" 
                    placeholder="Enter your email" 
                    required 
                    onChange={(e) => {this.setState({email: e.target.value})}} 
                  />
                </div>

                <div className="d-grid gap-2">
                  <button className="btn btn-primary btn-block" type="submit">
                    Reset Password
                  </button>
                </div>

                <br></br>
                <span className="fs-6">Do you already have an account? <Link to="/login">Click Here</Link></span>
                <br></br>
                <span className="fs-6">Don't have an account? <Link to="/register">Click Here</Link></span>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Forget