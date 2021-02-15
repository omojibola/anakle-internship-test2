import React from 'react';
import Header from '../Header/Header';
import styles from './Body.module.scss';
import { useSelector } from 'react-redux';
import Title from '../Title/Title';
import Slider from '../Slider/Slider';
import OtherReviews from '../OtherReviews/OtherReviews';
import Newest from '../Newest/Newest';

const Body = () => {
  const openDrawer = useSelector((state) => state.drawer.openDrawer);
  return (
    <div className={openDrawer ? styles.wrapper : styles.closed_wrapper}>
      <Header />
      <Title />
      <Slider />
      <OtherReviews />
    </div>
  );
};

export default Body;
