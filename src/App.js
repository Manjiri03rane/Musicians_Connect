import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import {Route, Switch} from 'react-router-dom';

import Home from './Components/Home';
import Artist from './Components/Artist';
import Gigs from './Components/Gigs';
import Community from './Components/Community';
import Home1 from './Components/Home1';
import Home2 from './Components/Home2';




function App() {
  return (
    <div className="App" >
  <Navbar />
  <Home />
  
   {/* <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/Artist' component={Artist} />
    <Route path='/Gigs' component={Gigs} />
    <Route path='/Community' component={Community}/>
    </Switch> */}
    
      
    </div>
  );
}

export default App;
