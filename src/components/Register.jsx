import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';

 class Register extends Component {

  state={
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    message: '',
  }

//registration Form Submit
formSubmit = (e )=>{
  e.preventDefault();
  const data={
    name:this.state.name,
    email:this.state.email,
    password:this.state.password,
    password_confirmation:this.state.password_confirmation,
  }

  axios.post('/register', data)
  .then( (response) => {
    localStorage.setItem('token', response.data.token);
    this.setState({
      loggedIn:true
    })
    this.props.setUser(response.data.user);
  })
  .catch( (error) => {
    console.log(error);
  });
}




  render() {

// After Register redirect to profile

if(this.state.loggedIn){
  return <Navigate to={'/profile'}/>
}

    return (
      <div><br></br><br></br>
            <div class="row">
            <div class="container mt-5 col-lg-4 offset-lg-4 jumbotron">
                  <h3 class="text-center mb-5 fs-1">Register Account</h3>


                    <form onSubmit={this.formSubmit}>
                    <div class="mb-3">
                        <label for="email" class="form-label fs-3">Name</label>
                        <input type="text" class="form-control" name="name" placeholder="Enter your name" required onChange={(e)=>{this.setState({name:e.target.value})}}/>
                      </div>

                      <div class="mb-3">
                        <label for="email" class="form-label fs-3">Email address</label>
                        <input type="email" class="form-control" name='email' placeholder="Enter your email" required onChange={(e)=>{this.setState({email:e.target.value})}}/>
                      </div>

                      <div class="mb-3 ">
                        <label for="password" class="form-label fs-3">Password</label>
                        <input type="password" class="form-control" name='password' placeholder="Enter your password" required onChange={(e)=>{this.setState({password:e.target.value})}}/>
                      </div>

                      <div class="mb-3 ">
                        <label for="password" class="form-label fs-3">Confirm Password</label>
                        <input type="password" class="form-control" id="password" name='password_confirmation' placeholder="Enter your confirmation password" required onChange={(e)=>{this.setState({password_confirmation:e.target.value})}}/>
                      </div>

                      <div class="d-grid gap-2">
                      <button class="btn btn-primary btn-block" type="submit">Register</button>
                      </div>
                        

                      <br></br>
                      <span class="fs-6">Do you already have an account? <Link to="/login">Click Here</Link></span>
                      <br></br>
                      <span class="fs-6">Forget Password? <Link to="/forget">Click Here</Link></span>
                    </form>
            </div>  
            </div>
                           
        </div>
    )
  }
}

export default Register