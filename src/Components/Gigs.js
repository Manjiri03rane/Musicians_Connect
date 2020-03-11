import React from 'react';
import Gig1 from './img/Gig1.jpg';

const Gigs = () => {
     return(
        <div >
            <div class="row">
                 <div class="col s3"> 
                  <h5>Filters</h5> 
                  <h6>Artist Requirement?</h6>   
                  <input></input>  

                  <h6>Location?</h6>   
                  <input></input>

                  <h6>Genre?</h6>   
                  <input></input>

                  <h6>Gender?</h6>   
                  <input></input> 
                 </div>

                 <div class="col s9"> 
                 <h2>Upcoming Gigs</h2> 
                 <div class="row">
                   <div class="col s1">1</div>
                   <div class="col s1">2</div>
                   <div class="col s1">3</div>
                   <div class="col s1">4</div>
                   <div class="col s1">5</div>
                   <div class="col s1">6</div>
                   <div class="col s1">7</div>
                   <div class="col s1">8</div>
                   <div class="col s1">9</div>
                   <div class="col s1">10</div>
                   <div class="col s1">11</div>
                   <div class="col s1">12</div>
                 </div> 
                 
                 <div class="col s12 m12">
                   <div class="card">
                   <div class="row">
                   <div class="col s1">1</div>
                   <div class="col s1">2</div>
                   <div class="col s1">3</div>
                   <div class="col s1">4</div>
                   <div class="col s1">5</div>
                   <div class="col s1">6</div>
                   <div class="col s1">7</div>
                   <div class="col s1">8</div>
                   <div class="col s1">9</div>
                   <div class="col s1">10</div>
                   <div class="col s1">11</div>
                   <div class="col s1">12</div>
                 </div> 

                 <div class="row"><h5 class="black-text">An Evening with Whitney - The Whitney Houston Hologram Tour</h5></div>
                 <div class="row">
                     <div class="col s12 m7">
                         <p>Location: Old Town, Cologne</p>
                         <p>Date: 13.03.2020</p>
                         <p>DRUMMER WANTED</p>
                         <p>Permanent drummer needed for upcoming tour, album and single release. Must be dedicated and available...….</p>
                         <p>Part time</p>
                     </div>
                     <div class="col s12 m5">
                     <img src={Gig1} alt="Gig Image"/>
                     </div>
                 </div>

                 
                      
                  </div>

                  <div class="card">
                 <div class="row"><h5 class="black-text">An Evening with Whitney - The Whitney Houston Hologram Tour</h5></div>
                 <div class="row">
                     <div class="col s12 m7">
                         <p>Location: Old Town, Cologne</p>
                         <p>Date: 13.03.2020</p>
                         <p>DRUMMER WANTED</p>
                         <p>Permanent drummer needed for upcoming tour, album and single release. Must be dedicated and available...….</p>
                         <p>Part time</p>
                     </div>
                     <div class="col s12 m5">
                     <img src={Gig1} alt="Gig Image"/>
                     </div>
                 </div>
                 </div>

                 <div class="card">
                 <div class="row"><h5 class="black-text">An Evening with Whitney - The Whitney Houston Hologram Tour</h5></div>
                 <div class="row">
                     <div class="col s12 m7">
                         <p>Location: Old Town, Cologne</p>
                         <p>Date: 13.03.2020</p>
                         <p>DRUMMER WANTED</p>
                         <p>Permanent drummer needed for upcoming tour, album and single release. Must be dedicated and available...….</p>
                         <p>Part time</p>
                     </div>
                     <div class="col s12 m5">
                     <img src={Gig1} alt="Gig Image"/>
                     </div>
                 </div>
                 </div>


                 </div>     

      
                 

                  

                      

      
                  

                 

                     

      
                 

                 



               </div>
            </div>
        </div>

        
    )
}
export default Gigs;