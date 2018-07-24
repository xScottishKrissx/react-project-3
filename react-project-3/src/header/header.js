import React from 'react';
import './header.css';

import {Link} from 'react-router-dom';

export class Header extends React.Component{


    

    render(){
        return(
            <div id="header" className='header-container'>
                <span>the Knews</span>
                <nav>
                    
                    <ul>
                        <li> <Link to="/home">Home</Link></li>
                        <li>Categories</li>
                        <li>Filters</li>
                        <li>Sign In / Register</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;