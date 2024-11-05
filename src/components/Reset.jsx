import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';


 class Reset extends Component {

  state={
    token: '',
    email: '',
    password: '',
    password_confirmation: '',
    message: '',
  }

  //reset Form Submit
formSubmit = (e )=>{
  e.preventDefault();
  const data={
    token:this.state.token,
    email:this.state.email,
    password:this.state.password,
    password_confirmation:this.state.password_confirmation,
  }

  axios.post('/resetpassword', data)
  .then( (response) => {
   this.setState({message:response.data.message})
   document.getElementById("formsubmit").reset();
  })
  .catch( (error) => {
    this.setState({message:error.response.data.message})
  });
}



  render() {

    // Show error message
    let error;
    if(this.state.message){
      error=(
        <div>
          <div class="alert alert-danger" role='alert'>
            {this.state.message}
          </div>
        </div>
      )
    }

    return (
      <div>
        <div><br></br><br></br>
            <div class="row">
            <div class="container mt-5 col-lg-4 offset-lg-4 jumbotron">
                  <h3 class="text-center mb-5 fs-1">Reset Account</h3>


                    <form onSubmit={this.formSubmit} id='formsubmit'>
                      {error}
                    <div class="mb-3">
                        <label for="email" class="form-label fs-3">Pin Code</label>
                        <input type="text" class="form-control" name="token" placeholder="Enter your token" required onChange={(e)=>{this.setState({token:e.target.value})}}/>
                      </div>

                      <div class="mb-3">
                        <label for="email" class="form-label fs-3">Email address</label>
                        <input type="email" class="form-control" name='email' placeholder="Enter your email" required onChange={(e)=>{this.setState({email:e.target.value})}}/>
                      </div>

                      <div class="mb-3 ">
                        <label for="password" class="form-label fs-3">New Password</label>
                        <input type="password" class="form-control" name='password' placeholder="Enter your password" required onChange={(e)=>{this.setState({password:e.target.value})}}/>
                      </div>

                      <div class="mb-3 ">
                        <label for="password" class="form-label fs-3">Confirm Password</label>
                        <input type="password" class="form-control" id="password" name='password_confirmation' placeholder="Enter your confirmation password" required onChange={(e)=>{this.setState({password_confirmation:e.target.value})}}/>
                      </div>

                      <div class="d-grid gap-2">
                      <button class="btn btn-primary btn-block" type="submit">Reset Password</button>
                      </div>
                        

                      <br></br>
                      <span class="fs-6">Do you already have an account? <Link to="/login">Click Here</Link></span>
                      <br></br>
                      <span class="fs-6">Forget Password? <Link to="/forget">Click Here</Link></span>
                    </form>
            </div>  
            </div>
                           
        </div>
      </div>
    )
  }
}

export default Reset