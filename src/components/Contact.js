import React from 'react';
import Title from './Title';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <Title title='contact' />
      <h3>Let's work together & create something important !</h3>
      <div className='contact-container'>
        <h4>Connect with me via</h4>

        <div className='contacts-container'>
          <div className='single-contact'>
            <a href=''>
              <FaPhoneAlt />
            </a>
            <h6> +387 61 648 793</h6>
          </div>

          <div className='single-contact'>
            <a href='https://accounts.google.com/ServiceLogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin'>
              <FaEnvelope />
            </a>
            <h6> edina.kanlic@gmail.com</h6>
          </div>

          <div className='single-contact'>
            <a href='https://www.linkedin.com/in/edina-kanli%C4%87-142541216/'>
              <FaLinkedin />
            </a>
            <h6> Edina Kanlić</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
