import React, { Component } from 'react';
import {Navlink} from 'react-router-dom';



class Footer extends Component{

    render()
    {

    return(
<div>

<footer class="page-footer">
          <div class="container">
            <div class="row3">
              <div class="col l6 s12">
                <h5 class="white-text">MusiciansConnect</h5>
                <p class="grey-text text-lighten-4">A one stop destination for various Artists
to connect with each other and also get 
some gigs.</p>
              </div>

              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Navigation</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">About Us</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Artist Corner</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Gigs</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Community</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Contact Us</a></li>

                </ul>
              </div>

              <div class="col l6 s12">
                <h5 class="white-text">Contact</h5>
                <p class="grey-text text-lighten-4">Ludwigs Guttmann Straße-6, Heidelberg</p>
                <p class="grey-text text-lighten-4">info-musiciansconnect@gmail.com</p>
                <span><p class="grey-text text-lighten-4">+49 06221 1000</p></span>
              </div>

            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2020 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
</div>

    )

    }

}
export default Footer