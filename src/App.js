import React from 'react';
//import logo from './logo.svg';
import LoginForm from './components/LoginForm/index';
import Header from './components/Header/index';
import TabMenu from './components/TabMenu/index';
import RecommendedFriends from './components/RecommendedFriends/index';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const icons = [
    {icon: faHome, label: 'Home'},
    {icon: faGift, label: 'Deal'},
    {icon: faCloudUploadAlt, label: 'Upload'},
    {icon: faMugHot, label: 'Work'},
    {icon: faCog, label: 'Setting'},
  ];
  const friendList = [
    {name: 'Accel GOD 1', email: 'cyberpunk2076@gmail.com'},
    {name: 'Accel GOD 2', email: 'cyberpunk2078@gmail.com'},
    {name: 'Accel GOD 3', email: 'cyberpunk2079@gmail.com'},
    {name: 'Accel GOD 4', email: 'cyberpunk2080@gmail.com'},
    {name: 'Accel GOD 5', email: 'cyberpunk2081@gmail.com'}
];
  return ([
    <Header/>,
    <TabMenu items={icons}/>,
    <RecommendedFriends friends={friendList} />,
    <LoginForm email='cyberpunk2076@gmail.com'/>
  ]);
}

export default App;
