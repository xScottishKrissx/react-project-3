import React, { Component } from 'react';
import './App.css';

import Header from './header/header.js';
import Footer from './footer/footer.js'
import { Routes } from './routes/routes';


// import {Route, Link, Redirect, Switch} from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';


// All of this stuff was used for practice with routes.
// const Child = ({match}) => console.log('match', match) || (
//   <div>
//     <h3>ID: {match.params.id}</h3>
//   </div>
// )


class App extends Component {
  render() {
    return (
      <div className=''>


    {/* <Router >
      <div>
        <h2>Accounts</h2>
        <ul>
          <li><Link to='/link1' >Link1</Link></li>
          <li><Link to='/link2' >Link2</Link></li>
          <li><Link to='/link3' >Link3</Link></li>
          <li><Link to='/link4' >Link4</Link></li>
        </ul>

        <Route path="/:id" component={Child} />
      </div>
    </Router>  */}




      <Header />
      <Routes />
      <Footer />
      </div>
    );
  }
}

export default App;
