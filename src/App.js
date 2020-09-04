import React, { Component } from 'react';
//import logo from './logo.svg';
import LoginForm from './components/LoginForm/LoginForm';
import Header from './components/Header/Header';
import TabMenu from './components/TabMenu/TabMenu';
import RecommendedFriends from './components/RecommendedFriends/RecommendedFriends';
import SearhBox from './components/SearchBox/SearchBox';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class App extends Component {
  render(){
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
      <SearhBox/>,
      <RecommendedFriends friends={friendList} />,
      <LoginForm email='cyberpunk2076@gmail.com'/>
    ]);
  }
}

export default App;
