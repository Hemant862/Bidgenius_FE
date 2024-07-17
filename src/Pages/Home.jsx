import React from 'react'
import Homeimg from '../assests/Property_auction.png'

function Home() {
  return (
    <div>
        <div style={{ backgroundImage: `url(${Homeimg})`}}>
            <div>
                <h1>
                "The best place"
                <span class="d-block font-weight-bold">to buy and sell!</span>
                </h1>
                
            </div>
        <br/>
       
        </div>
       
  </div>

    
  )
}

export default Home