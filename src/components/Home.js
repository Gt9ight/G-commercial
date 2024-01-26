import React from 'react'
import Roadside from './Roadside'
import TireBrands from './TireBrands'
import './Home.css'
const Home = () => {
  return (
  <div>
    <div>
      <Roadside />
      <TireBrands />
    </div>

      <div className='banner-one'>
        <div className='banner-text-one'>
        <h2>Commercial Tire Sales and Services</h2>
        <h3 className='subtextOne-banner-one'>We keep you on the road!</h3>
        </div>
      </div>

      <div className='services-container'>

      <h1 className='services-title'>Some of the many services we offer</h1>

      <div className='services'>
        <div className='commuter-service'>
          Tire change for car
        </div>
        <div className='truck-service'>
          Tire change for truck
        </div>
        <div className='road-service'>
          road service
        </div>
        <div className='allTime-service'>
          24/7 road service
        </div>
      </div>

      <div className='banner-image'>
        <div className='bannerImage-text'>
          <h1>EASY...</h1>
          <h3>Call G Commercial Tire</h3>
        </div>
      </div>

      </div>
<div className='about-us-banner'>
      <section className="company-info">
          <h2>Our Mission</h2>
          <p>
            As a premier commercial tire company, we take pride in delivering top-notch tire solutions and round-the-clock roadside assistance to keep your business moving forward.
          </p>
        </section>
  
        <section className="our-offerings">
          <h2>Why Choose [Company Name]?</h2>
          <ul>
            <li>
              <strong>Quality Tires:</strong> We offer a diverse range of commercial tires from trusted brands, ensuring durability and performance.
            </li>
            <li>
              <strong>24/7 Roadside Assistance:</strong> Our dedicated team is ready to assist you anytime, anywhere. We understand that breakdowns don't adhere to a schedule, so neither do we.
            </li>
            <li>
              <strong>Experienced Technicians:</strong> Our highly trained technicians possess the expertise to handle all your tire-related needs efficiently.
            </li>
            <li>
              <strong>Fleet Solutions:</strong> We specialize in providing tailored tire solutions for commercial fleets, helping you optimize performance and reduce downtime.
            </li>
            <li>
              <strong>Customer-Focused Approach:</strong> Your satisfaction is our priority. We strive to build lasting relationships with our clients by delivering reliable products and exceptional service.
            </li>
          </ul>
        </section>
        </div>
  </div>
  )
}

export default Home