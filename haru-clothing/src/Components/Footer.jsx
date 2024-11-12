import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'

export default function Footer(){
    return(
        <footer className="footer container text-white grid flow">
            <Link to='/' className="footer-logo">
                <img src="/assets/images/logo-white.png" alt="Haru Clothing Online Store Logo" aria-label="Haru Clothing Logo"/>
            </Link>

            <div className="footer-desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, odit veritatis! Laudantium ut a voluptates reprehenderit assumenda ipsam beatae enim praesentium tempora accusantium nemo, esse animi at error, iusto hic.</p>
            </div>

            <div className="footer-social-links flex fs-500">
                <a href="https://www.facebook.com">
                    <FaFacebookSquare />
                </a>

                <a href="https://www.instagram.com">
                 <FaInstagramSquare/> 
                </a>

                <a href="https://www.linkedin.com">
                 <FaLinkedin/>
                </a>

                <a href="https://www.twitter.com">
                 <FaTwitterSquare/>
                </a>

                <a href="https://www.youtube.com">
                 <FaYoutubeSquare/>
                </a>
            </div>

            <div className="footer-links grid">
                <h2 className="text-white">Company</h2>
                <Link to='about-us'>About Us</Link>
                <Link to='blog'>Blog</Link>
                <Link to='contact-us'>Contact Us</Link>
                <Link>Career</Link>
            </div>

            <div className="footer-links grid">
                <h2 className="text-white">Customer Services</h2>
                <Link>My Account</Link>
                <Link>Track Your Order</Link>
                <Link>Return</Link>
                <Link>FAQ</Link>
            </div>

            <div className="footer-links grid">
                <h2 className="text-white">Our Information</h2>
                <Link>Privacy</Link>
                <Link>User Terms & Conditions</Link>
                <Link>Return Policy</Link>
            </div>

            <div className="footer-links grid">
                <h2 className="text-white">Contact Info</h2>
                <p>+1 234 567 891</p>
                <p>haruclothing@e-commerce.com</p>
                <p>8502 Preston Rd. Inglewood, Maine 98380</p>
            </div>

            <div className="divider"></div>

            <p className="footer-copyright">Copyright &copy; 2024 Haru Clothing Website Design. All Rights Reserved.</p>
        </footer>
    )
}