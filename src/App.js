import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Components/Home';
import Artist from './Components/Artist';
import Gigs from './Components/Gigs';
import Community from './Components/Community';
import Footer from './Components/Footer';





function App() {
  return (
    <Router>
    <div className="App" >
   
    <Navbar />
    <Route exact path='/' component={Home} />
    <Route path='/Artist' component={Artist} />
    <Route path='/Gigs' component={Gigs} />
    <Route path='/Community' component={Community}/>
    <Route path='/Footer' component={Footer}/>

    <Footer/>

    </div>
    </Router>
    
      
    
  );
}

export default App;
