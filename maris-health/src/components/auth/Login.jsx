import React, { useState } from "react";

const Login = () => {
    const [userlogin, setUserlogin] = useState({
        email: '', 
        password: ''
    })


    const handleChange = e => {
        setUserlogin({ ...userlogin, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(userlogin)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">
                    Login
                </h5>
                <div className="input-field">
                    <label htmlFor = "email">Email</label>
                    <input type="email" name="email"
                    onChange={handleChange}
                    />
                    
                </div>
                <div className="input-field">
                    <label htmlFor = "password">Password</label>
                    <input type="password" name="password"
                     onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <button onClick={handleSubmit}className="btn blue darken-2 text black blue-text text-lighten-4">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;