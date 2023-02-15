import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import MainPage from './containers/MainPage';

function App() {
  return (
    <Layout>
      <MainPage/>
    </Layout>
  );
}

export default App;
