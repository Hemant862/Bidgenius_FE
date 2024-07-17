import React from 'react';
import './About.css';
import Homeimg from "../assests/Property_auction.png"
import oneimg from "../assests/1.jpg"
import twoimg from "../assests/4.jpg"
import threeimg from "../assests/5.jpg"

function About() {
  return (
    <div>
    <div className='black1'>
    <div className='container'>
      <img src={Homeimg} alt="Example" className="image" />
      <div className="text-overlay"> 
               <p> The best place </p>
                to buy and sell!
               </div>
    </div>
    </div>

    <div>
    <br/>
    <br/>

    <div className='container'>

    <div class="card-group">
  
  <div class="card me-5">
    <img src={oneimg} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Register</h5>
      <p class="card-text">To start using our auction, you’ll need to register. It’s completely free and requires just a few clicks!.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card me-5">
  
    <img src={twoimg} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Submit a Bid</h5>
      <p class="card-text">Submitting a bid to our auction is quick and easy. The process takes approximately 5 minutes.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={threeimg} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Buy or Bid</h5>
      <p class="card-text">You can instantly buy or place a bid on any desired product right after registration on our website.</p>
      <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>
    </div>

    <div class="text-light bg-dark">
      <div class="container">
        <footer class="py-5">
          <div class="row">
            <div class="col-6 col-md-2 mb-3">
              <h5>Information</h5>
              <ul class="nav flex-column text-light">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light ">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Pricing</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">About</a></li>
              </ul>
            </div>
      
            <div class="col-6 col-md-2 mb-3">
              <h5>Help Center</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Assistance</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">FAQ</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Testimonials</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Account Refill</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Payments</a></li>
              </ul>
            </div>
      
            <div class="col-6 col-md-2 mb-3">
              <h5>Partners</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">iStep</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Artex</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Style Shop</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">CrystalTech</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">VIP Fashion</a></li>
              </ul>
            </div>
      
            <div class="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                  <button class="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
      
          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2022 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3"><a class="link-dark" href="#"><i class="bi bi-whatsapp text-success"></i></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><i class="bi bi-instagram" style={{"color":"  #d62976"}}></i></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><i class="bi bi-twitter text-primary"></i></a></li>
            </ul>
          </div>
        </footer>
      </div>

    </div>


    </div>
  );
}

export default About;
