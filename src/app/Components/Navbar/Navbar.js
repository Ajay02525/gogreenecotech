'use client'

import Link from "next/link";


const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success  shadow p-3  fixed-top" styles="background-color: #e3f2fd;">
      <div className="container-fluid px-sm-5 fs-5 ">
        <a className="navbar-brand " href="#">logo</a>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       
          {/* <div className="d-flex"> */}
          <div className="collapse navbar-collapse  d-lg-flex justify-content-lg-end" id="navbarNav">
          <ul className="navbar-nav  mb-2 mb-lg-0 fw-bold lh-2" >
            <li className="nav-item ps-lg-2">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item ps-lg-2">
              {/* <a className="nav-link" href="/aboutus">AboutUs</a> */}
              <Link href='/about' className="nav-link">AboutUs</Link>
            </li>
            <li className="nav-item dropdown ps-lg-2">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Hazardious</a></li>
                <li><a className="dropdown-item" href="#">Non-Hazardious</a></li>
              </ul>
            </li>
            <li className="nav-item ps-lg-2" >
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
          {/* </div> */}
      </div>
    </nav>
  );
};



export default Navbar;

