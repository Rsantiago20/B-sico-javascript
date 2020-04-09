import React from 'react';
import Logo from '../../static/logo-login.png'

export const Signup = () =>  (
    <div className="login">
        <form>
            <img src={Logo} />
            <h3>Sign Up</h3>
            <input type="radio" name="gender" value="Male"></input>
            <input type="radio" name="gender" value="Female"></input>
            <div className="input-custom">
                <label>Name </label>
                <input type="email"  />
            </div>
            <div className="input-custom">
                <label>Username</label>
                <input type="password" />
            </div>
            <div className="input-custom">
                <label>Email</label>
                <input type="password" />
            </div>
            <div className="input-custom">
                <label>Cellphone</label>
                <input type="password" />

            </div>
            <br />
            <div className="buttom-primary">
                <input type="button" value="Sign Up"/>
            </div>
        </form>
    </div>
);