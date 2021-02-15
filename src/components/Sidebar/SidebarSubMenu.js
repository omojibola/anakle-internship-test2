/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import clsx from 'clsx';
import DropDownIcon from '../../assets/Vector.svg';
import { openSidebar, closeSidebar } from '../../redux/drawer';
import styles from './Sidebar.module.scss';

const SidebarSubmenu = (props) => {
  const {
    icon,
    children,
    title,
    openDrawer,
    to = '/unknown',
    updateCurrentMenu,
    index,
    currentMenu,
    dispatch,
    number,
  } = props;

  // State
  const [sectionClose, setSectionClose] = useState(true);

  const toggleSubmenu = () => {
    if (openDrawer) {
      setSectionClose(!sectionClose);
    }
  };

  // Image Toggles Drawer
  const toggleDrawer = () => {
    if (!openDrawer) {
      dispatch(openSidebar());
    } else {
      dispatch(closeSidebar());
    }
  };

  // On Component Mount
  // On Location Change Update the Background of the Section
  useEffect(() => {
    // Get Current Path
    const currentPath = window.location.pathname;
    let goto = '';

    // Match Routes to navigation Text
    switch (currentPath.split('/')[1]) {
      case 'dashboard':
        goto = '/';
        break;
      case 'orders':
        goto = '/orders';
        break;
      case 'menu':
        goto = '/menu';
        break;
      case 'notice':
        goto = '/notice';
        break;
      case 'complaints':
        goto = '/complaints';
        break;
      case 'emergencies':
        goto = '/emergencies';
        break;
      case 'guestlist':
        goto = '/guestlist';
        break;
      case 'staff':
        goto = '/staff';
        break;

      default:
        goto = 'home';
    }
    if (props.to === goto) {
      updateCurrentMenu(index);
    }
  }, []);

  // Monitor whether or not drawer is open
  useEffect(() => {
    if (!openDrawer) {
      // If Drawer is open close the subsection
      setSectionClose(true);
    }
  }, [openDrawer]);

  return children ? (
    <li className={styles.listItemGroup}>
      <div
        id="parent"
        className={clsx({
          [styles.listItem]: true,
          [styles.activeListItem]: currentMenu,
        })}
      >
        <div onClick={toggleDrawer} className={styles.iconContainer}>
          <img className={styles.icon} src={icon} alt="sidebar_icon" />
        </div>
        <p
          onClick={toggleSubmenu}
          className={clsx({
            [styles.iconText]: true,
            [styles.activeIconText]: currentMenu,
          })}
        >
          {title}
        </p>
        <img
          onClick={toggleSubmenu}
          className={styles.dropDownIcon}
          src={DropDownIcon}
          alt="drop-down"
        />
      </div>
      <div
        className={clsx({
          [styles.listItemSubmenu]: true,
          [styles.submenuClose]: sectionClose,
        })}
      >
        {children.map(({ text, to: goTo }) => (
          <NavLink
            key={text}
            className={styles.listItemSubmenuText}
            activeClassName={styles.activeListSubmenu}
            exact
            to={goTo}
          >
            {text}
          </NavLink>
        ))}
      </div>
    </li>
  ) : (
    <div
      className={clsx({
        [styles.listItem]: true,
        [styles.activeListItem]: currentMenu,
      })}
    >
      <div onClick={toggleDrawer} className={styles.iconContainer}>
        <img className={styles.icon} src={icon} alt="sidebar_icon" />
      </div>
      <NavLink className={styles.iconText} to={to}>
        {title}
        {number && (
          <div className={styles.badge}>
            <p>{number}</p>
          </div>
        )}
      </NavLink>
    </div>
  );
};

const ConnectedSidebarSubMenu = connect()(SidebarSubmenu);

export default ConnectedSidebarSubMenu;
