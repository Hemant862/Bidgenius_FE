import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Adminregister = () => {
    const { register, handleSubmit,reset } = useForm();


    async function saveData(data){
        data.aadhar_card=data.aadhar_card[0]
        data.pan_card=data.pan_card[0]
        data.passport_front=data.passport_front[0]
        data.passport_back=data.passport_back[0]
        await axios.post('http://127.0.0.1:8000/api/admin/', data, 
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
            console.log(data); 
            reset()
    }
     
    return (

    <div>
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Admin Register</p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit(saveData)}>
                      <div className="mb-4">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-outline">
                                <input type="text" id="text" className="form-control" {...register('first_name')} />
                                <label className="form-label" htmlFor="firstname">First Name</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline">
                                <input type="text" id="text" className="form-control" {...register('last_name')} />
                                <label className="form-label" htmlFor="lastname">Last Name</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1c" className="form-control" {...register('username')} />
                            <label className="form-label" htmlFor="form3Example1c">User Name</label>
                          </div>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="adharf" className="form-label">AdharCard:</label>
                          <input type="file" id="adharf" className="form-control" name="adharf" {...register('aadhar_card')} />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="panf" className="form-label">PanCard:</label>
                          <input type="file" id="panf" className="form-control" name="panf"  {...register('pan_card')} />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="passportf" className="form-label">Passport Front:</label>
                          <input type="file" id="passportf" className="form-control" name="passportf"  {...register('passport_front')} />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="passportb" className="form-label">Passport Back:</label>
                          <input type="file" id="passportb" className="form-control" name="passportb" {...register('passport_back')} />
                        </div>
                        <div className="mb-4">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-outline">
                                <input type="email" id="emailAddress" className="form-control" {...register('email')} />
                                <label className="form-label" htmlFor="emailAddress">Email</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline">
                                <input type="tel" id="phoneNumber" className="form-control" {...register('contact_no')} />
                                <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="form-outline">
                            <label htmlFor="pincode" className="form-label">Pincode</label>
                            <input type="text" id="pincode" className="form-control" {...register('pincode')} />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="form-outline">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" id="address" className="form-control" {...register('address')} />
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" {...register('terms')} />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Adminregister