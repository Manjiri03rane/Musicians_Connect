import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import c5 from  './img/c5.jpg';




class Navbar extends Component{
    componentDidMount(){
        const M = window.M;
   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });

 
    }
render() {
    return (
        
  <nav>
  <div className="nav-wrapper">
      <a to="#" className="brand-logo">MusiciansConnect</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Artist">Artists Corner</NavLink></li>
        <li><NavLink to="/Gigs">Gigs</NavLink></li>
        <li><NavLink to="collapsible.html">Community</NavLink></li>
         </ul>
         <ul id="nav-mobile" className="left hide-on-med-and-down">
         <li><NavLink to="sass.html"><i className="material-icons">search</i></NavLink></li>
         <li><NavLink to="sass.html">Sign Up</NavLink></li>
         <a class="waves-effect modal-trigger" href="#modal1"> <li><NavLink to="sass.html">Login</NavLink></li></a>
     <div id="modal1" class="modal">
    <div class="modal-content">
      <div class="row">
<div class="col s6"> 
     <div class="card">
        <div class="card-image">
          <img src={c5} />
          
        </div>
  </div>
      </div>
      <div class="col s6"> 
     <form class="card">
       <h5 center>LOGIN</h5>
       <div class="input-field col s12">
          <input placeholder="Enter Email Id" id="first_name" type="text" class="validate" />
          <label black for="first_name">Email ID:</label>
        </div>
        <div class="input-field col s12">
          <input placeholder="Enter Password" id="last_name" type="text" class="validate"/>
          <label black for="last_name">Password:</label>
          
        </div>
         <form action="#">
        <div class="input-field col s12">
      
        <input type="checkbox" />
        <span>Keep me loged In</span>

        </div>
          </form>
          <div class="input-field col s12"> 
          <a class="waves-effect waves-light btn">LOGIN</a>
        </div>
       
  </form>
      </div>
      </div>  
    </div>
  
 
      
      </div>

      </ul>
    </div>
  </nav>
  
         
         


         
      
    )
}
}

export default Navbar