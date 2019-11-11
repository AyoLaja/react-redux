import React from 'react'
import { withRouter } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">Stuff</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    {/* <li><a href="/todo">To Do</a></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(NavBar)