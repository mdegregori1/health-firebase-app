import React from "react"
import { Link } from 'react-router-dom'

import SignedinLinks from "./SignedinLinks"
import SignedoutLinks from "./SignedoutLinks"

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link to ='/' className="brand-logo">MarisHealth</Link>
                <SignedinLinks/>
                <SignedoutLinks/>
            </div>

        </nav>
    )
}

export default Navbar;