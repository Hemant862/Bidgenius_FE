import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const Register = () => {


    return (

         <div>
                        <section class="vh-100" style={{"background-color": "#eee;"}}>
                                    <div class="container h-100">
                                        <div class="row d-flex justify-content-center align-items-center h-100">
                                        <div class="col-lg-12 col-xl-11">
                                            <div class="card text-black" style={{"border-radius": "25px;"}}>
                                            <div class="card-body p-md-5">
                                                <div class="row justify-content-center">
                                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                                    <form class="mx-1 mx-md-4">

                                                    <div class="d-flex flex-row align-items-center mb-4">
                                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div data-mdb-input-init class="form-outline">
                                                                <input type="text" id="FirstName" class="form-control" />
                                                                <label class="form-label" for="FirstName">First Name</label>
                                                            </div>
                                                            

                                                            <div data-mdb-input-init class="form-outline">
                                                                <input type="text" id="LastName" class="form-control" />
                                                                <label class="form-label" for="LastName">Last Name</label>
                                                            </div>

</div>
                                                        <div data-mdb-input-init class="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" class="form-control" />
                                                        <label class="form-label" for="form3Example1c">Your Name</label>
                                                        </div>
                                                    

                                                        <div class="d-flex flex-row align-items-center mb-4">
                                                        
                                                            <label for="adharf" style={{"marginLeft":"5%"}}>AdharCard:</label>

                                                            <input type="file" style={{"marginLeft":"5%"}} id="adharf" name="adharf" accept="image/png, image/jpeg" />
                                                            
                                                        </div>
                                                        <div class="d-flex flex-row align-items-center mb-4">
                                                        
                                                        <label for="panf" style={{"marginLeft":"5%"}}>PanCard:</label>

                                                        <input type="file" style={{"marginLeft":"5%"}} id="panf" name="panf" accept="image/png, image/jpeg" />
                                                        
                                                    </div>

                                                        <div class="d-flex flex-row align-items-center mb-4">
                                                        
                                                            <label for="passportf" style={{"marginLeft":"5%"}}>Passport Front:</label>

                                                            <input type="file" style={{"marginLeft":"8.5%"}} id="passportf" name="passportf" accept="image/png, image/jpeg" />
                                                            
                                                        </div>

                                    
                                                        <div class="d-flex flex-row align-items-center mb-4">
                                                        
                                                        <label for="passportb" style={{"marginLeft":"5%"}}>Passport Back:</label>

                                                        <input type="file" style={{"marginLeft":"8.5%"}} id="passportb" name="passportb" accept="image/png, image/jpeg" />
                                                        
                                                    </div>

                                                        
                                                            
                                                    
                                                <div class="d-flex flex-row align-items-center mb-1">
                                                    <div class="row ">
                                                            <div class="col-md-6 mb-4 pb-2">

                                                            <div data-mdb-input-init class="form-outline">
                                                                <input type="email" id="emailAddress" class="form-control ms-3" />
                                                                <label class="form-label" for="emailAddress">Email</label>
                                                            </div>

                                                            </div>
                                                            <div class="col-md-6 mb-4 pb-2">

                                                            <div data-mdb-input-init class="form-outline">
                                                                <input type="tel" id="phoneNumber" class="form-control" />
                                                                <label class="form-label" for="phoneNumber">Phone Number</label>
                                                            </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-outline">
              <label htmlFor="pincode" className="form-label">Pincode</label>
              <input
                type="text"
                id="pincode"
                className="form-control"
          
              />
              
            </div>
             
        

                                                    <div class="form-check d-flex justify-content-center mb-5">
                                                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                        <label class="form-check-label" for="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                        </label>
                                                    </div>

                                                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg">Register</button>
                                                    </div>

                                                    </form>

                                                </div>
                                                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                    class="img-fluid" alt="Sample image"/>

                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </section>

         </div>
  )
}

export default Register