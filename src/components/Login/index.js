import React from 'react';
import Logo from '../../static/logo-login.png'
import {
    link, Link
} from 'react-router-dom'

export const Login = () =>  (
    <div className="login">
        <form>
            <img src={Logo} />
            <h3>Login</h3>
            <div className="input-custom">
                <label>Email address</label>
                <input type="email"  />
            </div>
            <div className="input-custom">
                <label>Password</label>
                <input type="password" />
            </div> 
            <Link to="/">
            <div className="buttom-primary">
                <input type="button" value="login"/>
            </div>
            </Link>
            <br />
            <p className="Signup-link">
                Not member yet? 
                <Link to="/signup">
                    Sing Up
                </Link>
            </p>

        </form>
    </div>

);