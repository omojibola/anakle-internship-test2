/** Actions */
// OPEN_DRAWER
const openSidebar = () => ({
  type: 'OPEN_DRAWER',
  open: true,
});

// CLOSE_DRAWER
const closeSidebar = () => ({
  type: 'CLOSE_DRAWER',
  open: false,
});

/** Reducer */
/* eslint-disable consistent-return */
// Drawer Reducer
const drawerReducer = (state = { openDrawer: false }, action) => {
  switch (action.type) {
    case 'OPEN_DRAWER':
      return {
        openDrawer: true,
      };
    case 'CLOSE_DRAWER':
      return {
        openDrawer: false,
      };
    default:
      return state;
  }
};

export { openSidebar, closeSidebar, drawerReducer };
