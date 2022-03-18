import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='page-footer'>
      <h1>Visit my profile on</h1>
      <div className='footer-container'>
        <a href='https://github.com/edinakanlic'>
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/edina-kanli%C4%87-142541216/'>
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
