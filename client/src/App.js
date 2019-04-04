import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import './App.css';
import MainPage from './components/MainPage';
import { reducer } from './main';


const store = createStore(reducer, {}, composeWithDevTools());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage/>
      </Provider>
    );
  }
}

export default App;
