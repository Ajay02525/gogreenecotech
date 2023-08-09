import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-success text-light py-4" >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>At GOGREENECO, we envision a world where industrial advancement coexist harmoniously with ecological preservation. Our
            Mission is to redefine waste management by offering holistic solutions that empower industries to turn challanges into opportunity\ies,
            all while uploading the highest environmental standards. 

            </p>
          </div>
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li><a  className='text-light' href="/">Home</a></li>
              <li><a className='text-light'  href="/about">About</a></li>
              <li><a  className='text-light' href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <p>Email: info@yourcompany.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>&copy; 2023 Blisscend. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
