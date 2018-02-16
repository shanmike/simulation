import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'
import Logo from '../../img/logo.png'

export default function nav(){
    return(
        <div className='navbar'>
            <div className='navBarContainer'>
                <img className='logo' src={Logo} alt="Shelfie Logo"/>
                <Link to='/'><button className='navButton'>SHELFIE</button></Link>
            </div>
        </div>
    )
}