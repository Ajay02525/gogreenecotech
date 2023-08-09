import React from 'react';
import styles from './contact.module.css'
function Contact() {
  return (
    <div className={styles.contactPage}>
      <div className="container">
        <h1 className="mt-4">Contact Us</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="container mt-5 mb-5">
        {/* Placeholder for Google Map */}
        <div className="embed-responsive embed-responsive-16by9">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.7409010529677!2d72.73647057453717!3d19.80857998155278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71fb4a8e6bead%3A0x4e0ac200fb25344e!2sHotel%20Reyansh%20Grand!5e0!3m2!1sen!2sin!4v1691577084572!5m2!1sen!2sin" 
        width={"1120" }
        height={"300" }
        allowFullScreen
        loading="lazy" 
        
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
