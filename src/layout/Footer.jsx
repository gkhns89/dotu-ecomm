import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

function Footer() {

  const getYear = () => {
    return new Date().getFullYear();
  }

  return (
    <footer className="w-full flex flex-col justify-center items-center">
      <div aria-label="footer-container" className="flex flex-col flex-wrap sm:flex-row sm:px-48 max-w-60 sm:max-w-full py-20 gap-8 justify-center">
        <div aria-label="footer-info" className="text-left flex flex-col gap-6 sm:min-w-60">
          <h3>Get In Touch</h3>
          <p className="max-w-52 text-txt-g">the quick fox jumps over the lazy dog</p>
          <div aria-label="social-icons" className="flex gap-4 text-c1"><FontAwesomeIcon icon={faFacebook} /><FontAwesomeIcon icon={faInstagram} /><FontAwesomeIcon icon={faTwitter} /></div>
        </div>
        <div aria-label="footer-links" className="text-left flex flex-col gap-5 sm:min-w-60">
          <h3>Company info</h3>
          <nav className="flex flex-col gap-[10px]">
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/carrier">Carrier</NavLink>
          <NavLink to="/hiring">We are hiring</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          </nav>
        </div>
        <div aria-label="feautures-links" className="text-left flex flex-col gap-5 sm:min-w-60">
          <h3>Features</h3>
          <nav className="flex flex-col gap-[10px]">
          <NavLink to="/business">Business Marketing</NavLink>
          <NavLink to="/user">User Analytic</NavLink>
          <NavLink to="/live-chat">Live Chat</NavLink>
          <NavLink to="/unlimited-support">Unlimited Support</NavLink>
          </nav>
        </div>
        <div aria-label="resources-links" className="text-left flex flex-col gap-5 sm:min-w-60">
          <h3>Resources</h3>
          <nav className="flex flex-col gap-[10px]">
          <NavLink to="/download">iOS & Android</NavLink>
          <NavLink to="/sign-up">Watch a Demo</NavLink>
          <NavLink to="/sign-up">Customers</NavLink>
          <NavLink to="/sign-up">API</NavLink>
          </nav>
        </div>
      </div>
      <div aria-label="footer-bottom" className="flex w-full flex-col items-center bg-[#FAFAFA]"><span className="max-w-56 sm:max-w-full py-6 text-center text-sm font-bold tracking-[0.2px]">Made with ❤️ by Dotu. All Right Reserved &copy; {getYear()}</span></div>
    </footer>
  );
}

export default Footer;
