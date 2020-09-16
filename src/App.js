import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Content from './pages/index/index.js'
import UserItem from './components/Users/UserItem'

function App() {
  return (
    <div className="App">
      <Content />
      <UserItem />
    </div>
  );
}

export default App;
