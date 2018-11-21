import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    let mainTitle = "CNIT133A - React Homework";

    return (
        <div className="header">
            <Link to="/">
                <button className='header-logo'>ABC Seminar - Home</button>
            </Link>     
                <h1>{mainTitle}</h1> 
        </div>
    );
}

export default Header;