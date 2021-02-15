import React from 'react';
import styles from './Title.module.scss';
import calendarIcon from '../../assets/calendar 1.svg';
import DropDownIcon from '../../assets/Vector.svg';

const Title = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.review}>
        <p className={styles.title}>Reviews</p>
        <p className={styles.subtitle}>
          {' '}
          <b style={{ color: '#2F4CDD' }}> Dashboard</b> / Customer Reviews
        </p>
      </div>
      <div className={styles.filterWrapper}>
        <div className={styles.filter}>
          <img src={calendarIcon} />
          <div className={styles.filterText}>
            <p className={styles.head}>Filter Period</p>
            <p className={styles.sub}>4 June 2020 - 4 July 2020</p>
          </div>
          <img src={DropDownIcon} />
        </div>
      </div>
    </div>
  );
};

export default Title;
