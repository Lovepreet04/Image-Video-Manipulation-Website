import React, { useState } from 'react';
import './Home.css';
import ContactImg from '../../Image/ContactUs.svg';

export default function Contact() {
  const [data, setData] = useState({
    sub: "",
    email: "",
    ph: "",
    msg: ""
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };



  const formSubmit = (e) => {
    e.preventDefault();
    alert(

     ' $sdf{data.email},${data.sub},${data.ph},${data.}.'
    );
  };
  return (
    <div>
      <section id='header' className='d-flex align-items-center'>
        <div className='container nav_bg mt-4'>
          <div className="row">
            <div className="edit-body col-lg-6  order-2 order-lg-1  col-sm-10 col-md-6 d-flex justify-content-center flex-column">
              <p className='edit-head  d-flex justify-content-center '>CONTACT US</p>
              <form onSubmit={formSubmit}>
                <div className="form-floating mt-3 mb-3">
                  <input type="text" className="form-control" id="pwd" placeholder="Enter password" name="sub" onChange={InputEvent} value={data.sub}/>
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="form-floating mb-3 mt-3">
                  <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" onChange={InputEvent} value={data.email}/>
                  <label htmlFor="email">Email</label>
                </div>

                <div className="form-floating mt-3 mb-3">
                  <input type="number" className="form-control" id="pwd" placeholder="Enter password" name="ph" onChange={InputEvent} value={data.ph}/>
                  <label htmlFor="subject">Phone No.</label>
                </div>
                <div className="form-floating mb-3 mt-3">
                  <textarea className="form-control" id="comment" name="msg" placeholder="Comment goes here"onChange={InputEvent} value={data.msg}></textarea>
                  <label htmlFor="comment">Comments</label>
                </div>
                <button type="submit" className="btn get-started">Submit</button>
              </form>
            </div>
            <div className="edit-body col-lg-6 order-1 order-lg-2 col-sm-10 col-md-6 d-flex justify-content-center flex-column">
              <img src={ContactImg} className='mg-fluid vert-move banner-img-about' alt='banner' />

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
