import './Home.css';
import Footer from './Footer'; // Make sure to import Footer

import React, { useRef, useState } from 'react';


import products from '../data/products';

function scrollUp(serviceRowsRef) {
  if (serviceRowsRef.current) {
    serviceRowsRef.current.scrollBy({ top: -60, behavior: 'smooth' });
  }
}

function scrollDown(serviceRowsRef) {
  if (serviceRowsRef.current) {
    serviceRowsRef.current.scrollBy({ top: 60, behavior: 'smooth' });
  }}
  

function Home() {
  const [activeVideo, setActiveVideo] = useState(null);
  const serviceRowsRef = useRef(null);
  return (
    <div>
      <div className="container-fluid video-section">
        <div className="video-overlay">
          <h1>Revolutionizing Robotics for the Future</h1>
          <p>Our startup is at the forefront of innovation, developing cutting-edge robotics solutions to tackle the most challenging automation needs of today and tomorrow.</p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
        <video autoPlay muted loop className="video-background">
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
     
    
         
      <div className="container-fluid">
  <div className="row">
    <div className="col-md-4 image-container">
      <img src="chu-and-moxi.jpg" alt="Why Choose Us" className="why-choose-us-image" />
    </div>
  </div>
  </div>
      <div className="container why-choose-us-section">
        <div className="row justify-content-end">
         
          
          <div className="col-md-6  content-container">
            <h2>Why Choose Us</h2>
            <p>At Robotics Co., we are committed to pushing the boundaries of technology. Our expert team of engineers and innovators work tirelessly to bring you state-of-the-art robotic solutions that enhance efficiency, safety, and productivity. Here’s why you should choose us:</p>
          </div>
          <div className='col-md-1'></div>
        </div>
      
</div>

<div className="container-fluid service-section">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-5 left-column">
          <div className="content">
            <p className="tagline">Innovating the Future</p>
            <h2 className="heading">Our Robotics Services</h2>
            <p className="description">
              At Robotics Co., we specialize in transforming industries with cutting-edge robotics solutions. From AI-powered systems to maintenance and consulting, our expertise is tailored to meet your unique needs.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-5 right-column">
          <div className="scrollable-container">
            <div className="arrow up-arrow" onClick={() => scrollUp(serviceRowsRef)}>▲</div>
            <div className="service-rows" ref={serviceRowsRef}>
              <div className="service-row">
                <div className="icon">🔧</div>
                <div className="text">
                  <h4>Technical Support</h4>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div>
              <div className="service-row">
                <div className="icon">🚀</div>
                <div className="text">
                  <h4>Innovation</h4>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div>
              <div className="service-row">
                <div className="icon">🔒</div>
                <div className="text">
                  <h4>Security</h4>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div>
              <div className="service-row">
                <div className="icon">🛠️</div>
                <div className="text">
                  <h4>Maintenance</h4>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div>
              <div className="service-row">
                <div className="icon">💡</div>
                <div className="text">
                  <h4>Consulting</h4>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div>
            </div>
            <div className="arrow down-arrow" onClick={() => scrollDown(serviceRowsRef)}>▼</div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="container-fluid product-page">
      {/* Centered Content */}
      <div className="centered-content">
        <p className="tagline">Our Robotics Products</p>
        <h2 className="heading">Innovative Robotics Solutions</h2>
        <p className="description">
          Explore our range of cutting-edge robotics products designed to revolutionize industries and automate your workflows.
        </p>
      </div>


      {/* Horizontal Scroll for Product Cards */}
      <div className='horizontal-scroll-container'>
      <div className="horizontal-scroll">
        
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => setActiveVideo(product.video)}
          >
            <video src={product.video} muted className="product-video"></video>
            <div className="product-info">
              <h4>{product.name}</h4>
              <p>
                {product.info}{' '}
                <a href="#" className="read-more-link">
                  Read more
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
      

      {/* Enlarged Video Popup */}
      {activeVideo && (
        <div className="video-popup">
          <div className="popup-overlay" onClick={() => setActiveVideo(null)}></div>
          <div className="popup-content">
            <button className="close-btn" onClick={() => setActiveVideo(null)}>
              ✖
            </button>
            <video src={activeVideo} controls autoPlay className="popup-video"></video>
          </div>
        </div>
      )}
    </div>
    </div>
     
      <div className="container-fluid feedback-section">
        <h2>Customer Feedback</h2>
        <div className="row justify-content-center second-feedback ">
         
          <div className="col-md-3 feedback-box">
            <div className="feedback-content">
              <img src="image.png" alt="Customer 1" className="feedback-image" />
              <div className="feedback-info">
                <h4>John Doe</h4>
                <p className="company">Tech Innovators Inc.</p>
              </div>
            </div>
            <p className="feedback">"Robotics Co. provided us with exceptional service. Their innovative solutions have transformed our business operations. Highly recommended!"</p>
          </div>
          <div className="col-md-3 feedback-box">
            <div className="feedback-content">
              <img src="image.png" alt="Customer 2" className="feedback-image" />
              <div className="feedback-info">
                <h4>Jane Smith</h4>
                <p className="company">Automation Experts Ltd.</p>
              </div>
            </div>
            <p className="feedback">"The team at Robotics Co. is incredibly knowledgeable and supportive. Their robotics solutions are top-notch and have greatly improved our efficiency."</p>
          </div>
          <div className="col-md-3 feedback-box">
            <div className="feedback-content">
              <img src="image.png" alt="Customer 3" className="feedback-image" />
              <div className="feedback-info">
                <h4>Michael Johnson</h4>
                <p className="company">FutureTech Solutions</p>
              </div>
            </div>
            <p className="feedback">"Working with Robotics Co. has been a game-changer for our company. Their expertise and dedication to customer satisfaction are unparalleled."</p>
          </div>
          </div>
        </div>
      



            


      <div className="contact-us-container">
        <div className="contact-us-box">
          <div className="contact-us-left">
            <h2>Get in Touch</h2>
            <p>Have any questions or inquiries? Reach out to us for more information about our services and offerings.</p>
          </div>
          <div className="contact-us-right">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
