import React, { Component } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { openSidebar, closeSidebar } from '../../redux/drawer';

import Toggle from '../../assets/hamburgermenu.svg';
import Logo from '../../assets/logo.svg';
import chef from '../../assets/illustration.svg';
import DashboardIcon from '../../assets/dashboard.svg';
import OrderIcon from '../../assets/order.svg';
import MenuIcon from '../../assets/menu.svg';
import CustomerIcon from '../../assets/customer.svg';
import AnalyticsIcon from '../../assets/analytics.svg';
import SidebarSubmenu from './SidebarSubMenu';
import styles from './Sidebar.module.scss';

class Sidebar extends Component {
  state = {
    currentMenu: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  };

  handleSidebarToggle = () => {
    const { dispatch, openDrawer } = this.props;
    if (openDrawer) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  };

  // Update Submenu State and Global Sidebar State
  updateCurrentMenu = (componentIndex) => {
    const { currentMenu } = this.state;
    const { dispatch } = this.props;
    // Ensure it is a new path
    // Change the location state to new path
    if (!currentMenu[componentIndex]) {
      const newArray = currentMenu.map((item, index) => {
        if (componentIndex !== index) {
          return false;
        }
        return true;
      });
      this.setState((prevState) => ({
        currentMenu: newArray,
        openDrawer: !prevState.openDrawer,
      }));
      // Update Parent Component holding Sidebar State
      dispatch(closeSidebar());
    }
  };

  render() {
    const { currentMenu } = this.state;
    const { openDrawer } = this.props;
    return (
      <nav
        className={clsx({
          [styles.drawer]: true,
          [styles.drawerClose]: !openDrawer,
        })}
      >
        <div className={styles.list}>
          <li className={styles.header}>
            <img
              className={clsx({
                [styles.headerIcon]: true,
                [styles.hideHeaderIcon]: !openDrawer,
              })}
              src={Logo}
              alt="sidebar_logo"
            />
            <img
              className={clsx({
                [styles.toggle]: true,
                [styles.moveToggle]: !openDrawer,
              })}
              onClick={this.handleSidebarToggle}
              src={Toggle}
              alt="sidebar_toggle"
            />
          </li>
        </div>
        <SidebarSubmenu
          to="/"
          title="Dashboard"
          icon={DashboardIcon}
          openDrawer={openDrawer}
          currentMenu={currentMenu[0]}
          updateCurrentMenu={this.updateCurrentMenu}
          index={0}
        />
        <SidebarSubmenu
          to="/orders"
          openDrawer={openDrawer}
          icon={OrderIcon}
          title="Orders"
          number={25}
          currentMenu={currentMenu[1]}
          updateCurrentMenu={this.updateCurrentMenu}
          index={1}
        ></SidebarSubmenu>
        <SidebarSubmenu
          to="/menu"
          openDrawer={openDrawer}
          icon={MenuIcon}
          title="Menu"
          currentMenu={currentMenu[2]}
          updateCurrentMenu={this.updateCurrentMenu}
          index={2}
        >
          {[
            { text: 'New Menu', to: '/menu/new' },
            { text: 'All Menu', to: '/all' },
          ]}
        </SidebarSubmenu>

        <SidebarSubmenu
          to="/customers"
          openDrawer={openDrawer}
          icon={CustomerIcon}
          title="Customers"
          currentMenu={currentMenu[3]}
          updateCurrentMenu={this.updateCurrentMenu}
          index={3}
        >
          {[
            { text: 'Add New', to: '/customers/new' },
            { text: 'Members', to: '/customers/members' },
            { text: 'General Customers', to: '/customers/general' },
          ]}
        </SidebarSubmenu>

        <SidebarSubmenu
          to="/analytics"
          openDrawer={openDrawer}
          icon={AnalyticsIcon}
          title="Analytics"
          currentMenu={currentMenu[4]}
          updateCurrentMenu={this.updateCurrentMenu}
          index={4}
        >
          {[
            { text: 'Recent', to: '/analytics/analytics' },
            { text: 'All', to: '/analytics/all' },
          ]}
        </SidebarSubmenu>

        <div className={openDrawer ? styles.box : styles.hide}>
          <img
            className={styles.chef_icon}
            src={chef}
            alt="chef-illustration"
          />
          <p className={styles.box_text}>
            Organize your menus through button bellow
          </p>
          <button className={styles.menu_button}> +Add Menus</button>
        </div>
        <div className={openDrawer ? styles.bottom_text : styles.hide}>
          <p>
            <b>Davur Restaurant Admin Dashboard</b> © 2020 All Rights Reserved
          </p>
          <p>Made with ♥ by Peterdraw</p>
        </div>
      </nav>
    );
  }
}

// Map State To Props
const mapStateToProps = (state) => ({
  openDrawer: state.drawer.openDrawer,
});

const ConnectedSidebar = connect(mapStateToProps)(Sidebar);

export default ConnectedSidebar;
