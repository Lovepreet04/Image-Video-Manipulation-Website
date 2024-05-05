import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';

export default function Footer() {
  const date = new Date();
  const showYear = date.getFullYear();

  return (
	<div className='footerbanner mt-1'>
    <footer className="footer container">
		<div className="footer-left">
			<Link to=""><img src={logo} className="footer-img" alt='LOGO'/></Link>
			<h5>BeautiCam</h5>
			<p>Copyright © {showYear} BeautiCam.com</p>
		</div>
		<div className="footer-right">
			<Link to="https://www.facebook.com/profile.php?id=100078436383192&mibextid=ZbWKwL"><i className="fa fa-facebook"></i></Link>
			<Link to="https://instagram.com/_lovepreet.0_0.singh_?igshid=MzNlNGNkZWQ4Mg=="><i className="fa fa-instagram"></i></Link>
			<Link to="https://github.com/Lovepreet04"><i className="fa fa-github"></i></Link>
			<Link to="https://www.linkedin.com/in/lovepreet2004singh/"><i className="fa fa-linkedin"></i></Link>
		</div>
	</footer>
	</div>
  )
}
