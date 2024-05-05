import React, { useState } from 'react';
import './Home.css';
import AboutImg from '../../Image/About.svg';
import { saveAs } from 'file-saver';
export default function About() {
  const pdfUrl = 'Resume';
  const handleDownload = () => {
    // if (im == null) { return (null) }
    window.location.href = pdfUrl;
  };
  return (
    <section id='header' className='d-flex align-items-center'>
      <div className='container nav_bg mt-4'>
        <div className="row">
          <div className="edit-body col-lg-6  order-1 order-lg-1  col-sm-10 col-md-6 d-flex justify-content-center flex-column">
            <p className='edit-head  d-flex justify-content-center '>ABOUT</p>
            <div className='left_section mt-3 mb-3'>
              <p className='about_content'>Hello, Its Me</p>
              <p className='name'>Lovepreet Singh</p>
              <p className='about_content'>And I'm a Full stack Web Developer</p>
              <p className='about_content'>I'm web designer with no experience but, trying new thing which give me pleasure.</p>
              <a className='btn get-started' href="https://www.linkedin.com/in/lovepreet2004singh/" target='blanck' >Find me in LinkedIN</a>
              
              
              </div >



          </div>
          <div className="edit-body col-lg-6 order-2 order-lg-2 col-sm-10 col-md-6 d-flex justify-content-center flex-column">
            <img src={AboutImg} className='mg-fluid vert-move banner-img-about' alt='banner' />

          </div>
        </div>
      </div>
    </section>
  )
}
