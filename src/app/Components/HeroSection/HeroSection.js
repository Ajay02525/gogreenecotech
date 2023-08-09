import React from 'react';
import styles from './herosection.module.css'
import Navbar from '../Navbar/Navbar';
import CarouselComponent from '../Carousel/Carousel';
import Image from 'next/image';
// import Image from 'next/image';

function HeroSection() {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div>
      <CarouselComponent/>
      </div>
      <section className={styles.section}>
        <div className={styles.card}>
          <div className={styles.heading}>
            <h1>Why Go Green Eco </h1>
          </div>
          <div className={styles.cards}>
            <div className={styles.carditem}>
              <Image src='/Images/trust.png' alt='trust' width={100} height={100}  ></Image>
              <p>Trusted Service</p>
            </div>
            <div className={styles.carditem}>
              <Image src='/Images/sustainable.png' alt='sustainable' width={100} height={100}  ></Image>
              <p>Environmental Friendly</p>
            </div>
            <div className={styles.carditem}>
              <Image src='/Images/quality.png' alt='quality' width={100} height={100}  ></Image>
              <p>Well Experiance</p>
            </div>
          </div>
        </div>
        
      </section>
      
    
    </div>
  )
}

export default HeroSection
