import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Features from '../pages/Features'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'

const RouterLinks =() => {
    return (
       <Router>
        <ul>
            <li>
                <Link to="/">Music</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="about">About</Link>
            </li>
            <li>
                <Link to="contact">Contact</Link>
            </li>
            <li>
                <Link to="features">features</Link>
            </li>
            <li>
                <Link to="signin">Sign In</Link>
            </li>
            <li>
                <Link to="signup">Sign Up</Link>
            </li>
        </ul>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/" element={<About/>}></Route>
            <Route path="/" element={<Contacts/>}></Route>
            <Route path="/" element={<Features/>}></Route>
            <Route path="/" element={<Signin/>}></Route>
            <Route path="/" element={<Signup/>}></Route>
        </Routes>
       </Router>
    )
}

export default RouterLinks