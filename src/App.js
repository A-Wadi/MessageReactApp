import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import ListFriend from './components/listFriends';
import {Caht1,Caht2} from './components/chat';
import Home from './components/home';
import Video from './components/video.js';
import Game from './components/game.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          < Header />
          <div className="container-fluid">
            <div className="row">
              <div id="chatsAll" className="p-0 col-10">
                <Route path="/chats/AliSamer" component={Caht1} />
                <Route path="/chats/FarisWadi" component={Caht2} />
                <Route exact path="/" component={Home} />
                <Route path="/videos" component={Video} />
                <Route path="/games" component={Game} />
              </div>
              <div id="listChats" className="p-0 col-2">
                < ListFriend />
              </div>
            </div>
          </div>
        </div>
        </BrowserRouter>
    );
  }
  
  componentDidMount () {
    var heightHeader = document.getElementById('header').offsetHeight,
        heightWindow = window.innerHeight,
        heightList = heightWindow - heightHeader,
        list = document.getElementById('list');        
        list.style.height = heightList + "px";        
  }
}

export default App;