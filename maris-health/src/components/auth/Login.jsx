import React, { useState } from "react";

const Login = () => {
    return (
        <div className="container">
            <form className="white">
                <h5 className="grey-text text-darken-3">
                    Login
                </h5>
                <div className="input-field">
                    <label htmlFor = "email">Email</label>
                    <input type="email" id="email"/>
                </div>
                <div className="input-field">
                    <label htmlFor = "password">Password</label>
                    <input type="password" id="password"/>
                </div>
                <div className="input-field">
                    <button className="btn blue darken-2 text black blue-text text-lighten-4">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;