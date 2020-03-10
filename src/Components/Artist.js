import React from 'react';

const Artist = () => {
    return(
        <div >
            <div class="row">
                 <div class="col s3"> 
                  <h5>Filters</h5> 
                  <h6>What Artist are you looking for?</h6>   
                  <input></input>  

                  <h6>Location?</h6>   
                  <input></input>

                  <h6>Genre?</h6>   
                  <input></input>

                  <h6>Gender?</h6>   
                  <input></input> 
                 </div>

                 <div class="col s9"> 
                 <h2>Artists Corner</h2>  
                 
                 <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="images/sample-1.jpg" alt="Avatar"/>
          <span class="card-title">Card Title</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>     
                 </div>
      
             </div>
    
        </div>

        
    )
}
export default Artist;