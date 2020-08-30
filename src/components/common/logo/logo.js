import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/i-talenthub-logo.png';

function Logo() {
    return <Link to="/"><img src={logo} alt="logo" /></Link>
}

export default Logo;