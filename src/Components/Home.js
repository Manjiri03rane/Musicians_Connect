import React, { Component } from 'react'

import Img1 from './img/Img1.jpg';
import { render } from 'react-dom';


class Home extends Component {
    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems,{});
          });

    }
        componentDidMount(){
            const M = window.M;
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.dropdown-trigger');
                var instances = M.Dropdown.init(elems,{});
              });
        }
    


render(){
    return(
        <div >
        <div >
    
       <img className="materialboxed" width="100%" src={ Img1}></img>
       {/* <div class="caption left-align">
          <h3>Left Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div> */}
        </div>

        <div class="row">
<div class="col s3">

  <h6 > Which Artist are you looking for?</h6>
  <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Any</a>

  <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">Guitarist</a></li>
    <li><a href="#!">Singer</a></li>
    {/* <li class="divider" tabindex="-1"></li> */}
    <li><a href="#!">Pianist</a></li>
    <li><a href="#!">Drummer</a></li>
  </ul>

</div>
<div class="col s3">
<h6 > In which Location ?</h6>
  <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Any</a>

  <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">Guitarist</a></li>
    <li><a href="#!">Singer</a></li>
    {/* <li class="divider" tabindex="-1"></li> */}
    <li><a href="#!">Pianist</a></li>
    <li><a href="#!">Drummer</a></li>
  </ul> 


  
</div>
<div class="col s3">
<h6 > Genre ?</h6>
  <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Any</a>

  <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">Guitarist</a></li>
    <li><a href="#!">Singer</a></li>
    {/* <li class="divider" tabindex="-1"></li> */}
    <li><a href="#!">Pianist</a></li>
    <li><a href="#!">Drummer</a></li>
  </ul>
</div>

<div class="col s2">
    <i  class="large material-icons">search</i>"
</div>

</div>
</div>

        
    )
    }
    
}
export default Home;