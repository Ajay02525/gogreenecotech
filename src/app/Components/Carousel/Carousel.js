'use client'
import { useEffect } from 'react';
import { Carousel } from 'bootstrap';
import Image from 'next/image';
import styles from './carousel.module.css';

const CarouselComponent = () => {
  useEffect(() => {
    // Initialize the carousel when the component mounts
    const carouselElement = document.querySelector('.carousel');
    const carousel = new Carousel(carouselElement);

    // Remove the interval when the component unmounts to prevent memory leaks
    return () => {
      carousel.pause();
      carousel.dispose();
    };
  }, []);

 

  return (
    <div id="myCarousel" className={`carousel slide ${styles.caraouselText}`}data-bs-ride="carousel">
        <div className={styles.text}>
            <h1 >Pioneer in Waste Management</h1>
            <p>Shaping the Future</p>
        </div>
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
        {/* Add more slides here */}
      </ol>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          {/* <Image src="/Images/ing4.jpg" width={1500} height={600} objectFit='cover'  alt="Slide 1" /> */}
          <div className={styles.imagecontainer}>
            <Image src="/Images/ing5.jpg" layout="fill" className={styles.image} alt="Slide 1"/>
            </div>
        </div>
        <div className="carousel-item ">
          {/* <Image src="/Images/ing5.jpg" width={1500} height={600} objectFit='cover'  alt="Slide 2" />
           */}
              <div className={styles.imagecontainer}>
             <Image src="/Images/ing6.jpg" layout="fill" className={styles.image} alt="Slide 1"/>
            </div>
        </div>
        <div className="carousel-item ">
          {/* <Image src="/Images/ing6.jpg" width={1500} height={600} objectFit='cover'  alt="Slide 3" /> */}
          <div className={styles.imagecontainer}>
             <Image src="/Images/ing7.jpg" layout="fill" className={styles.image} alt="Slide 1"/>
            </div>
        </div>
        <div className="carousel-item ">
          {/* <Image src="/Images/ing7.jpg" width={1500} height={600} objectFit='cover'  alt="Slide 4" /> */}
          <div className={styles.imagecontainer}>
             <Image src="/Images/img1.jpg" layout="fill" className={styles.image} alt="Slide 1"/>
            </div>
        </div>
        {/* Add more slides here */}
      </div>

      {/* Controls */}
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
};

export default CarouselComponent;
