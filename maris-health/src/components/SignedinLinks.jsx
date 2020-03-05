import React from 'react';

import { NavLink } from 'react-router-dom'

const SignedinLinks = () => {
    return (
       <ul className="right">
           <li><NavLink to ="/">Add a Note</NavLink></li>
           <li><NavLink to ="/">Log out</NavLink></li>
           <li><NavLink to ="/" className="btn btn-floating blue lighten-4 text black blue-text text-darken-2">MM</NavLink></li>
       </ul>
    )
}

export default SignedinLinks;