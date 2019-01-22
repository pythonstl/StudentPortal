import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './component/Layout/Layout';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}
