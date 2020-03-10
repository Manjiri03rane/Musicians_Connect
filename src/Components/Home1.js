import React, { Component } from 'react'
import Img1 from './img/Img1.jpg';
import { render } from 'react-dom';


class Home1 extends Component{
    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems,{});
          });

    }



render(){
 return(
        <div >
    
       <img className="materialboxed" width="100%" src={ Img1}></img>
       {/* <div class="caption left-align">
          <h3>Left Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div> */}
        </div>
        
    )
    }
}
export default Home1