import React from 'react';
import './banner.css';
import IMAGE from '../../Constant/const';
import { Button } from 'react-bootstrap';

function banner() {
  return (
    <div>
      <div className='gs-homebanner'>
        <div className='gs-banner-content'>
          <h6>
            <span className='text-white'>
              <img src={ IMAGE.BANNERLINE }/> Where Health Meets Convenience:
            </span>
          </h6>
          <h2 className='text-white'>
            Experience Unparalleled Medical and <br/>E-commerce Services Tailored to Your Needs
          </h2>
          <Button variant="warning m-4 gs-borderradius-25">
            Contact Us
            </Button>
          <Button variant="outline-warning m-4 gs-borderradius-25">
            View Services
          </Button>
        </div>
      </div>
      
    </div>
  )
}

export default banner