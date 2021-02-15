import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Body from './components/Body/Body';
import ConnectedSidebar from './components/Sidebar/Sidebar';

import configureStore from './redux/configureStore';

// Set up Redux store
const { store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <ConnectedSidebar />
          <Body />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
