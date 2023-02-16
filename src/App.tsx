import React from 'react';
import logo from './logo.svg';
import './App.sass';
import Layout from './components/Layout';
import MainPage from './containers/MainPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <MainPage/>
      </Layout>
    </div>
  );
}

export default App;
