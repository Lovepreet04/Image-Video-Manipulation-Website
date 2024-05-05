import React from 'react';
import notfound from '../../Image/notfound.svg';

export default function NoPage() {
  return (
    <div className='container m-auto d-flex justify-content-center banner'>
      <img src={notfound} className='img-fluid vert-move banner-img-edit ' alt='banner' />
    </div>
  )
}
