import React from 'react';
import OurServices from '../components/OurServices';
import Category from '../components/Category';
import Header from '../components/Header';

const Home = () => (
  <div>

    {/* Section for the the Landing Page Header*/}
    <Header />

    {/* Section for the the Landing page features*/}
    <OurServices />

    {/* Section for the the Landing page Inspirations and profile of creators*/}
    <Category />
    
  </div>
);


export default Home;