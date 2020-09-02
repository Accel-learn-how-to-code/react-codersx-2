import React from 'react';
//import logo from './logo.svg';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import './App.css';

function App() {
  // const list = [
  //     'Go to market',
  //     'Buy food',
  //     'Make dinner'
  // ];
  // const listMap = list.map(x => <li>{x}</li>);
  //<ul>{listMap}</ul>
  return (
      [<Header/>,
      <LoginForm/>]
  );
}

export default App;
