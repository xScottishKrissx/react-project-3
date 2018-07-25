import React from 'react';
import './header.css';

import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <div id="header" className='header-container'>
            <span className="brand">the Knews</span>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>

                    <li>
                        <Link to="/home">Categories</Link>
                    </li>

                    <li>
                        <Link to="/home">Filters</Link>
                    </li>

                    <li>
                        <Link to="/home">Sign In / Register</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

// export class Header extends React.Component{
//     render(){
//         return(
//             <div id="header" className='header-container'>

//                 <span className="brand">the Knews</span>
                
//                 <nav>                    
//                     <ul>
//                         <li> <Link to="/home">Home</Link></li>
//                         <li>Categories</li>
//                         <li>Filters</li>
//                         <li>Sign In / Register</li>
//                     </ul>
//                 </nav>

//             </div>
//         )
//     }
// }

export default Header;