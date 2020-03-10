import React, {Component} from 'react'
import { render } from '@testing-library/react';

class  Home2 extends Component{
    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems,{});
          });
    }


render(){
    return(
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

    )
}
}
export default Home2;