import React from 'react';
import bell from '../../assets/Group 8.svg';
import chat from '../../assets/Group 9.svg';
import gift from '../../assets/Group 10.svg';
import settings from '../../assets/Group 11.svg';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <input placeholder="search here" type="text" id="search" name="search" />
      <div className={styles.menu}>
        <ul className={styles.menu_link}>
          <li>About</li>
          <li id={styles.active}>Tools</li>
          <li>Help</li>
        </ul>
      </div>
      <div className={styles.notification}>
        <img className={styles.notification_icon} src={bell} />
        <img className={styles.notification_icon} src={chat} />
        <img className={styles.notification_icon} src={gift} />
        <img className={styles.notification_icon} src={settings} />
        <div className={styles.profile}>
          <p>
            Hello,<b> Samuel</b>{' '}
          </p>
        </div>
        <div className={styles.avatar}></div>
      </div>
    </div>
  );
};

export default Header;
