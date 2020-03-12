import React, { Component } from 'react'
import aa1 from './img/aa1.jpg';
import aa2 from './img/aa2.jpg';
import aa6 from './img/aa6.jpg';
import aa4 from './img/aa4.jpg';
import aa5 from './img/aa5.jpg';
import aa7 from './img/aa7.jpg';
import c1 from  './img/c1.jpg';
import c2 from  './img/c2.jpg';
import c3 from  './img/c3.jpg';
import c4 from  './img/c4.jpg';
import c5 from  './img/c5.jpg';
import c6 from  './img/c6.jpg';
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
        componentDidMount(){
          const M = window.M;
          document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems,{});
          });
        }
    


render(){
    return(
        <div>
       <div >
       <img className="materialboxed" width="100%" src={ Img1}></img>
       </div>
<div class="row">
<div class="col s3">
  <h6 > Which Artist are you looking for?</h6>
  <input></input>
</div>
<div class="col s3">
<h6 > In which Location ?</h6>
        <input></input>
</div>
    <div class="col s3">
        <h6 > Genre ?</h6>
        <input></input>
</div>
<div class="col s3">
    <i  class="large material-icons">search</i>
</div>
</div>
 <div class="row">
    <div class="col s8">
      <div class="card-panel teal">
      <h3 class="left-align">Artist Corner</h3>
       <h4  class="black-text left-align">From an instrument player to a sound engineer, you will find many talented artists on this website. 
       You can either use the above search filter or simply click on the below button to view the all the artists registered on this website. 
    </h4>
     <button class="btn  left-align waves">View All Artist</button>
      </div>
    </div>
    <div class="col s4">
      <div class="card-panel teal">
      <div class="card hello">
        <div class="card-image">
          <img src="images/sample-1.jpg"/>
          </div>
      </div>
     </div>
    </div>
    </div>


    <div class="row">
    <div class="col s12">
      <div class="card-panel teal1">
       <h3 class="center-align">Upcoming Gigs</h3>
  <div class="carousel carousel-slider center">
    <div class="carousel-fixed-item center">
      {/* <a class="btn waves-effect white grey-text darken-text-2">button</a> */}
    </div>
    <div class="carousel-item  white-text" href="#one!">
    <div class="card ">
                        <div class="card-image ">
                          <img src={aa4}></img>
                      <span class="card-title"></span>
                        </div>
                              <div class="card-content">
                              <p>I am a very simple card. I am good at containing small bits of information.
                                       I am convenient because I require little markup to use effectively.</p>
                              </div>
                            <div class="card-action">
                                  <a href="#">This is a link</a>
                            </div>
                 </div>
      </div>
    <div class="carousel-item  white-text" href="#two!">
    <div class="card">
                        <div class="card-image ">
                          <img src={aa5}></img>
                      <span class="card-title"></span>
                        </div>
                              <div class="card-content">
                              <p>I am a very simple card. I am good at containing small bits of information.
                                       I am convenient because I require little markup to use effectively.</p>
                              </div>
                            <div class="card-action">
                                  <a href="#">This is a link</a>
                            </div>
                 </div>
      </div>
    <div class="carousel-item  white-text" href="#three!">
    <div class="card">
                        <div class="card-image ">
                          <img src={aa6}></img>
                      <span class="card-title"></span>
                        </div>
                              <div class="card-content">
                              <p>I am a very simple card. I am good at containing small bits of information.
                                       I am convenient because I require little markup to use effectively.</p>
                              </div>
                            <div class="card-action">
                                  <a href="#">This is a link</a>
                            </div>
                 </div>
      
    </div>
    </div>
    </div>
    </div>


  </div>
        
    


 <div class="row">
    <div class="col1 s12">
      <div class="card-panel teal">
      <h3 class="center-align">Community</h3>
          <div class="rowin2">
            <div class="col s6">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                   <img  src={aa1}></img>
                </div>
                <button class="btn left-align waves-effect">Create a Community</button>
              </div>
            </div>
            <div class="col s6">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                   <img  src={aa2}></img>
                </div>
                <button class="btn left-align waves-effect">Join a Community</button>
              </div>
            </div>
            </div>
       </div>
    </div>
  </div>

  <div class="row">
    <div class="col s12">
      <div class="card-panel teal">
      <h3 class="center-align">Contact Us</h3>
          <div class="container">
                <div class="row">
                <div class="col s12"> 
                  <h6 class="black-text">Whether you are an Artist or not, your voice matters. We would love to hear from you for any kind of 
suggestions or queries. </h6> 
                  <h6 class="left-align black-text">Your full name</h6>   
                  <input></input>  

                  <h6 class="left-align black-text">Your email</h6>   
                  <input></input>

                  <h6 class="left-align black-text">Subject</h6>   
                  <input></input>

                  <h6 class="left-align black-text">Your message</h6>   
                  <input></input> 
                 </div>
               </div>
           </div> 
              <button class="btn  waves-effect">Submit</button>
        </div>
      </div>
    </div>

    <div class="row">
    <div class="col s12">
      <div class="card-panel1 teal1">
      <h3 class="center-align">User Testimonials</h3>

      <div class="carousel">
    <a class="carousel-item" href="#one!">
      <div class="card5">
        <div class="card-image">
        <img src={c1} class="circle responsive-img"/>
          {/* <span class="card-title">Card Title</span> */}
        </div>
        <div >

          <p class="black-text">"The big advantage is that it works relatively fast.
           All relevant information can be seen relatively quickly at a glance. 
           I was able to get in touch with other great artists."</p>
           <div>
           <h >Phoebe Buffay, Singer from Heidelberg.</h></div>

        </div>
        
      </div>
    </a>
    <a class="carousel-item" href="#two!">
    <div class="card4">
        <div class="card-image">
        <img src={ c2} class="circle responsive-img"/>
          {/* <span class="card-title">Card Title</span> */}
        </div>
        <div >

          <p class="black-text">"The big advantage is that it works relatively fast.
           All relevant information can be seen relatively quickly at a glance. 
           I was able to get in touch with other great artists."</p>
           <div>
           <h >Phoebe Buffay, Singer from Heidelberg.</h></div>

        </div>
        
      </div>
    </a>
    <a class="carousel-item" href="#three!">
    <div class="card3">
        <div class="card-image">
        <img src={ c3} class="circle responsive-img"/>
          {/* <span class="card-title">Card Title</span> */}
        </div>
        <div >

          <p class="black-text">"The big advantage is that it works relatively fast.
           All relevant information can be seen relatively quickly at a glance. 
           I was able to get in touch with other great artists."</p>
           <div>
           <h >Phoebe Buffay, Singer from Heidelberg.</h></div>

        </div>
        
      </div>
    </a>
    <a class="carousel-item" href="#four!">
    <div class="card2">
        <div class="card-image">
        <img src={c4} class="circle responsive-img"/>
          {/* <span class="card-title">Card Title</span> */}
        </div>
        <div >

          <p class="black-text">"The big advantage is that it works relatively fast.
           All relevant information can be seen relatively quickly at a glance. 
           I was able to get in touch with other great artists."</p>
           <div>
           <h >Phoebe Buffay, Singer from Heidelberg.</h></div>

        </div>
        
      </div>
    </a>
    <a class="carousel-item" href="#five!">
    <div class="card1">
        <div class="card-image">
        <img src={c5} class="circle responsive-img"/>
          {/* <span class="card-title">Card Title</span> */}
        </div>
        <div >

          <p class="black-text">"The big advantage is that it works relatively fast.
           All relevant information can be seen relatively quickly at a glance. 
           I was able to get in touch with other great artists."</p>
           <div>
           <h >Phoebe Buffay, Singer from Heidelberg.</h></div>

        </div>
        
      </div>
    </a>
    <a class="carousel-item" href="#six!">
    <div >
        <div class="card-image">
          <img src={ c6} class="circle responsive-img"/>
          {/* <span class="card-title">Card Title</span> */}
        </div>
        <div >

          <p class="black-text">"The big advantage is that it works relatively fast.
           All relevant information can be seen relatively quickly at a glance. 
           I was able to get in touch with other great artists."</p>
           <div>
           <h >Phoebe Buffay, Singer from Heidelberg.</h></div>

        </div>
        
      </div>
    </a>
  </div>

     </div>
    </div>
    </div>

    
  
  
  
  
  </div>
)
    }
    
}
export default Home;