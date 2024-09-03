import React from 'react'

import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
<div>
        <div>
            

        <nav className="navbar navbar-light bg-dark">
        <div className="row row-cols-auto">
            <i className="bi bi-telephone text-warning ms-5 col" style={{"font-size": "1.5rem" }}/>
             <h5 className="text text-light fst-italic col">Free Call : 9876543210 </h5>
        </div>
  <h6 className="text text-secondary fs-6 fw-lighter">Opening Hours: 8am-8pm PST M-Th; 6am-3pm PST Fri</h6>
  <div>
  <NavLink to='/Adminregister' > <button className='btn btn-warning me-1' >Register</button></NavLink>
  <NavLink  to='/Login'> <button className='btn btn-secondary me-5'>Log in</button></NavLink>

  </div>
  
  
</nav>

        </div>

        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <NavLink className="navbar-brand" aria-readonly>BidGenius</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to="#">Buy Now</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to="#">Services</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to="#">About Us</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to="#">Contact Us</NavLink>
            </li>
            {/* <li className="nav-item">
                <NavLink className="nav-link active" to="/Adminregister">Admin Registration</NavLink>
            </li> */}
            {/* <li className="nav-item">
                <NavLink className="nav-link active" to="/login">login</NavLink>
            </li> */}
            <li className="nav-item">
                <NavLink className="nav-link active" to="/show">Admin show</NavLink>
            </li>
            {/* <li className="nav-item">
                <NavLink className="nav-link active" to="/Admindash">Admin Dashboard</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to="/Userdash">User Dashboard</NavLink>
            </li> */}
            </ul>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </div>
        </nav>
        </div>

</div>


  )
}

export default NavBar