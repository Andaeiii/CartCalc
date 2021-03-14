import React, { Component } from 'react';

//in functinal components react passes 
//the props to the component at runtime... 

//const NavBar = (props) => { props.totalCounters 
const NavBar = ({ totalCounters }) => {   //using destructing... 

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
                Navbar <span class="badge badge-pill badge-secondary"> {totalCounters} </span>
            </a>
        </nav>
    )
}

export default NavBar;