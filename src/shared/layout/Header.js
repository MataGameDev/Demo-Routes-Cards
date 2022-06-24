import React from 'react';
import PropTypes from 'prop-types';
import talesto from '../images/talesto.jpg';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const {title, url} = props;

    return ( 
        <header className="App-header">
            
            <div className="App-header-logo">
                <a href={url}>
                    <img src={talesto} className="App-logo" alt="logo" />
                </a>
                
                <h1>{title}</h1>
            </div>
            

            <ul>
                <li><Link to ="/">Home </Link></li>
                <li><Link to ="/about">About </Link></li>
                <li><Link to ="/notes">Notes </Link></li>
                <li><Link to ="/contact">Contact</Link></li>
            </ul>
        </header>
    );
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;