import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import videoImg from '../../Image/VideoImg.svg';
import CamImg from '../../Image/CamImg.svg';
import FaceImg from '../../Image/Face.svg';

export default function Edit() {
    return (
        <section id='header' className='d-flex align-items-center'>
            <div className='container nav_bg mt-4 mb-4'>
                <div className="row">
                    <div className="edit-body col-lg-6  col-sm-10 col-md-6 d-flex justify-content-center flex-column">
                        <p className='edit-head  d-flex justify-content-center '>IMAGE</p>
                        <Link to='/image'><img src={CamImg} className='img-fluid vert-move banner-img-edit ' alt='banner' /></Link>

                    </div>
                    <div className="edit-body col-lg-6  col-sm-10 col-md-6 d-flex justify-content-center flex-column">
                        <p className='edit-head d-flex justify-content-center '>VIDEO</p>
                        <Link to='/video'><img src={videoImg} className='img-fluid vert-move banner-img-edit' alt='banner' /></Link>

                    </div>
                    {/* <div className="edit-body col-lg-4  col-sm-10 col-md-6 d-flex justify-content-center flex-column">
                        <p className='edit-head d-flex justify-content-center '>WEBCAM</p>'
                        <Link to='/face'><img src={FaceImg} className='img-fluid vert-move banner-img-edit' alt='banner' /></Link>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
