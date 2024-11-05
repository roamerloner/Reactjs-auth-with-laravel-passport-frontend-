import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';

 class Login extends Component {

  state={
    email: '',
    password: '',
    message: '',
  }

  //Login Form Submit
  formSubmit = (e )=>{
    e.preventDefault();
    const data={
      email:this.state.email,
      password:this.state.password,
    }

    axios.post('/login', data)
    .then( (response) => {
      localStorage.setItem('token', response.data.token);
      this.setState({
        loggedIn:true
      })
      this.props.setUser(response.data.user);
    })
    .catch( (error) => {
      this.setState({message:error.response.data.message});
    });
  }

  render() {

    // After Login redirect to profile

    if(this.state.loggedIn){
      return <Navigate to={'/profile'}/>
    }

    //Show error message

    let error = "";
    if(this.state.message){
      error = (
        <div>
          <div class="alert alert-danger fs-6" role='alert'>
            {this.state.message}

          </div>
        </div>
      )
    } // end error message

    if(localStorage.getItem('token')){
      return <Navigate to={'/profile'}/> 
     }

    return (
      <div><br></br><br></br>
            <div class="row">
            <div class="container mt-5 col-lg-4 offset-lg-4 jumbotron">
                  <h3 class="text-center mb-5 fs-1">Login Account</h3>


                    <form onSubmit={this.formSubmit}>
                      {error}
                      <div class="mb-3">
                        <label for="email" class="form-label fs-3">Email address</label>
                        <input type="email" name="email" class="form-control" placeholder="Enter your email" required onChange={(e)=>{this.setState({email:e.target.value})}} />
                      </div>

                      <div class="mb-3 ">
                        <label for="password" class="form-label fs-3">Password</label>
                        <input type="password" name="password" class="form-control"  placeholder="Enter your password"  required onChange={(e)=>{this.setState({password:e.target.value})}} />
                      </div>

                      <div class="d-grid gap-2">
                      <button class="btn btn-primary btn-block" type="submit">Login</button>
                      </div>
                        

                      <br></br>
                      <span class="fs-6">Forget Password? <Link to="/forget">Click Here</Link></span>
                    </form>
            </div>  
            </div>
                           
        </div>
    )
  }
}

export default Login

//Okay now I want to git initialize this project. But I have a confusion. The frontend code is in another drive and folder. And the backend code is in c drive/xampp/htdocs path. So, which folder should I git initialize?