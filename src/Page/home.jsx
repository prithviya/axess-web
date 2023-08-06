import React from 'react';
import HomeAbout from '../Component/HomeAbout/about';
import HomeBanner from '../Component/HomeBanner/banner';


function home() {
  return (
    <div>
      <HomeBanner/>
      <HomeAbout/>
    </div>
  )
}

export default home