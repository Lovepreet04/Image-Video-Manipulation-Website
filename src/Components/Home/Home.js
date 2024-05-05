import React from 'react';
import './Home.css';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import BI from '../../Image/BannerImg.svg';

export default function Home() {
  return (
    <section id='header' className='d-flex align-items-center'>
      <div className='container-fluid nav_bg'>
        <div className='row mt-2'>
          <div className='col-10 mx-auto my-5'>
            <div className='row mb-4 pt-lg-10'>
              <div className='col-md-6 pt-1 pt-lg-5 order-2 order-lg-1 d-flex  flex-column'>
                <h1>Free Photo & Video Editor</h1>
                <h1>By : <strong className='brand-name'>BeautiCam</strong></h1>
                <h3 className='my-3'>Easily edit your photos and add photo effects, text, graphics, and more!</h3>
                <div className='mt-3'>
                  <Link to="edit" className='btn get-started'>Get started</Link>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img pt-lg-1">
                <img src={BI} className='img-fluid vert-move banner-img' alt='banner' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
