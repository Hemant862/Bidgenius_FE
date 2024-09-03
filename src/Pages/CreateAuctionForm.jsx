
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Createauctionform = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
      try {
          const response = await axios.post('http://127.0.0.1:8000/api/create-auction-details/', data, {
              headers: {
                  'Content-Type': 'application/json',
              },
          });
  
          if (response.status === 201) {
              navigate('/admindash');  // Redirect to the Admin Dashboard or any other page after successful submission
          }
      } catch (error) {
          console.error('Error submitting auction details:', error);
          if (error.response) {
              console.error('Error response data:', error.response.data);
          }
      } finally {
          reset();
      }
  };
  
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
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create Auction Details</p>
                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-box fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="product"
                                                            className="form-control"
                                                            {...register('product', { required: true })}
                                                        />
                                                        <label className="form-label" htmlFor="product">Product ID</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-calendar-alt fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="date"
                                                            id="auction_date"
                                                            className="form-control"
                                                            {...register('auction_date', { required: true })}
                                                        />
                                                        <label className="form-label" htmlFor="auction_date">Auction Date</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-clock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="time"
                                                            id="auction_start_time"
                                                            className="form-control"
                                                            {...register('auction_start_time', { required: true })}
                                                        />
                                                        <label className="form-label" htmlFor="auction_start_time">Auction Start Time</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-clock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="time"
                                                            id="auction_end_time"
                                                            className="form-control"
                                                            {...register('auction_end_time', { required: true })}
                                                        />
                                                        <label className="form-label" htmlFor="auction_end_time">Auction End Time</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-dollar-sign fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="number"
                                                            id="increment_amount"
                                                            className="form-control"
                                                            {...register('increment_amount', { required: true })}
                                                        />
                                                        <label className="form-label" htmlFor="increment_amount">Increment Amount</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />
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
}

export default Createauctionform;

