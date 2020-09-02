import React from 'react';
//import logo from './logo.svg';
import LoginForm from './components/LoginForm/index';
import Header from './components/Header/index';
import TabMenu from './components/TabMenu/index'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  const icons = [
    {icon: faHome, label: 'Home'},
    {icon: faGift, label: 'Deal'},
    {icon: faCloudUploadAlt, label: 'Upload'},
    {icon: faMugHot, label: 'Work'},
    {icon: faCog, label: 'Setting'},
  ];
  return (
      [<Header/>,
      <TabMenu items={icons}/>,
      <LoginForm email='cyberpunk2076@gmail.com'/>]
  );
}

export default App;
