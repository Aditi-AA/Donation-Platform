import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Org_login.css';
import { Link } from 'react-router-dom';

const Org_login = () => {
    return(
        <form className="login">
  <p>Please log in</p>
  <input type="text" placeholder="User Name" />
  <input type="password" placeholder="Password" />
  <input type="submit" value="Log In" />
  <div className="links">
    <a href="#">Forgot password</a>
    <Link to='/Org_signup'>Register</Link>
  </div>
</form>

        );
    };
    
    export default Org_login;
    