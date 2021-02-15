import React from 'react';
import Carousel from 'react-elastic-carousel';
import { data } from './data';
import styles from './Slider.module.scss';
import image from '../../assets/placeholder.svg';
import star from '../../assets/star.svg';
import './Slider.css';

const Slider = () => {
  return (
    <div className={styles.container}>
      <Carousel itemsToShow={3}>
        {data.map((item) => (
          <div className={styles.reviewWrapper} key={item.id}>
            <div className={styles.heading}>
              <div className={styles.avatar}></div>
              <div className={styles.headingText}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.subTitle}> {item.subTitle}</p>
              </div>
            </div>
            <div className={styles.review}>
              <p>{item.review}</p>
            </div>
            <div className={styles.bottomSection}>
              <img id={styles.image} src={image} />
              <div style={{ marginRight: 110 }}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.occupation}>{item.occupation}</p>
              </div>
              <div className={styles.ratingBox}>
                <img src={star} />
                <p>{item.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
