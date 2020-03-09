import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import {Route, Switch} from 'react-router-dom';

import Home from './Components/Home';
import Artist from './Components/Artist';
import Gigs from './Components/Gigs';
import Community from './Components/Community';




function App() {
  return (
    <div className="App" >
  <Navbar />
  
   <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/Artist' component={Artist} />
    <Route path='/Gigs' component={Gigs} />
    <Route path='/Community' component={Community}/>
    </Switch>
    
      
    </div>
  );
}

export default App;
