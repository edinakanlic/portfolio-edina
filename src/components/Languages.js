import React from 'react';
import { withProjectConsumer } from '../context';

import { FaJsSquare } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';

const Languages = ({ languages }) => {
  return (
    <div className='languages-container'>
      {languages.map((item, index) => {
        if (item === 'HTML') {
          return (
            <div className='single-language'>
              <FaHtml5 className='icon' />
              <h3>{item}</h3>
            </div>
          );
        }
        if (item === 'CSS') {
          return (
            <div className='single-language'>
              <FaCss3 className='icon' />
              <h3>{item}</h3>
            </div>
          );
        }
        if (item === 'Bootstrap 4') {
          return (
            <div className='single-language'>
              <FaBootstrap className='icon' />
              <h3>{item}</h3>
            </div>
          );
        }
        if (item === 'JavaScript') {
          return (
            <div className='single-language'>
              <FaJsSquare className='icon' />
              <h3>{item}</h3>
            </div>
          );
        }

        return <div>{item}</div>;
      })}
    </div>
  );
};

export default withProjectConsumer(Languages);
