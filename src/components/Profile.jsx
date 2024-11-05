import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'

 class Profile extends Component {
  render() {
    let name;
    let email;

    if(this.props.user){
      name = this.props.user.name;
      email = this.props.user.email;
    }

    if(!localStorage.getItem('token')){
     return <Navigate to={'/login'}/> 
    }


    return (
      <div>
          <div><br></br><br></br>
            <div class="row">
            <div class="container mt-5 col-lg-4 offset-lg-4 jumbotron">
                  <h3 class="text-center mb-5 fs-1">User Profile</h3>
                  <ul class="list-group">
                    <li class="list-group-item fs-3">Name: {name}</li>
                    <li class="list-group-item fs-3">Email: {email}</li>
                  </ul>

                    
            </div>  
            </div>
                           
        </div>
      </div>
    )
  }
}

export default Profile