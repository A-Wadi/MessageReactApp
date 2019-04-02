import React, { Component , Fragment } from 'react';
// import {Link} from 'react-router-dom';
import avtar1 from '../image/avatar.png';
import './chat.css';

class Caht1 extends Component {
  render() {
    return (
      <Fragment>
        <div id="chat1" className="row chat">
          <div id="listRight" className="p-0 col-3">
            <ul className="m-0">
              <li className="p-2">
                <img src={avtar1} alt="avtar" className="img-fluid rounded-circle" width="50" />
                <span className="NamePerson"> Ali Samer</span>
              </li>
              <li className="setting">
                <i className="setting fas fa-cog"></i>
                <span id="keySetting" className="setting"> Setting </span>
                <i id="angleRight" className="setting fas fa-angle-right"></i>
                <ul id="listSetting">
                  <li>
                    <i className="fas fa-bell-slash"></i>
                    <span> Mute Notification</span>
                  </li>
                  <li>
                    <i className="fas fa-trash-alt"></i>
                    <span> Delete Chats</span>
                  </li>
                  <li>
                    <i className="fas fa-ban"></i>
                    <span> Block</span>
                  </li>
                  <li>
                    <i className="fas fa-user-plus"></i>
                    <span> Add in Group</span>
                  </li>
                  <li>
                    <i className="fas fa-pen"></i>
                    <span> Rename Nick Name</span>
                  </li>
                  <li>
                    <i className="fas fa-user-clock"></i>
                    <span> Alert</span>
                  </li>
                </ul>
              </li>
              <li className="colorCheck">
                <i className="colorCheck fas fa-palette"></i>
                <span id="keyColor" className="colorCheck"> colors </span>
                <i id="angleRight2" className="colorCheck fas fa-angle-right"></i>
                <ul id="listColor">
                  <li>
                    <i className="fas Blue fa-paint-brush"></i>
                    <span className="Blue"> Blue 'Default'</span>
                  </li>
                  <li>
                    <i className="fas Red fa-paint-brush"></i>
                    <span className="Red"> Red</span>
                  </li>
                  <li>
                    <i className="fas Pink fa-paint-brush"></i>
                    <span className="Pink"> Pink</span>
                  </li>
                  <li>
                    <i className="fas Green fa-paint-brush"></i>
                    <span className="Green"> Green</span>
                  </li>
                  <li>
                    <i className="fas Orange fa-paint-brush"></i>
                    <span className="Orange"> Orange</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-9 pl-0">
            <div className="row chatSpeak m-0 pr-0 p-3">
              <div className="rounded speakChatPerson1 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia do exercitation nisi adipisicing anim cupidatat. Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="offset-4"></div>
              <div className="offset-4"></div>
              <div className="rounded speakChatPerson2 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia do exercitation nisi adipisicing anim cupidatat. Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="rounded speakChatPerson1 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia do exercitation nisi adipisicing anim cupidatat. Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="offset-4"></div>
              <div className="offset-4"></div>
              <div className="rounded speakChatPerson2 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia do exercitation nisi adipisicing anim cupidatat. Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="rounded speakChatPerson1 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia do exercitation nisi adipisicing anim cupidatat. Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="offset-4"></div>
              <div className="offset-4"></div>
              <div className="rounded speakChatPerson2 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia do exercitation nisi adipisicing anim cupidatat. Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="rounded speakChatPerson1 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia do exercitation nisi adipisicing anim cupidatat. Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="offset-4"></div>
              <div className="offset-4"></div>
              <div className="rounded speakChatPerson2 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia do exercitation nisi adipisicing anim cupidatat. Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="rounded speakChatPerson1 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia do exercitation nisi adipisicing anim cupidatat. Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="offset-4"></div>
              <div className="offset-4"></div>
              <div className="rounded speakChatPerson2 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia do exercitation nisi adipisicing anim cupidatat. Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="rounded speakChatPerson1 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia do exercitation nisi adipisicing anim cupidatat. Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="offset-4"></div>
              <div>
                &nbsp;
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input className="inputMessage p-2 w-100" type="text" />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

  componentDidMount() {
    var keySetting = document.getElementById('keySetting'),
        listSetting = document.getElementById('listSetting'),
        faRight = document.getElementById('angleRight'),
        keyColor = document.getElementById('keyColor'),
        listColor = document.getElementById('listColor'),
        faRight2 = document.getElementById('angleRight2'),
        redE = document.querySelectorAll('.Red')[1],
        blueE = document.querySelectorAll('.Blue')[1],
        pinkE = document.querySelectorAll('.Pink')[1],
        greenE = document.querySelectorAll('.Green')[1],
        orangeE = document.querySelectorAll('.Orange')[1],
        speakChatPerson1 = document.querySelectorAll('.speakChatPerson1'),
        i = 0,
        i2 = 0,
        colorCustomR = window.getComputedStyle(redE, null).getPropertyValue("color"),
        colorCustomB = window.getComputedStyle(blueE, null).getPropertyValue("color"),
        colorCustomP = window.getComputedStyle(pinkE, null).getPropertyValue("color"),
        colorCustomG = window.getComputedStyle(greenE, null).getPropertyValue("color"),
        colorCustomO = window.getComputedStyle(orangeE, null).getPropertyValue("color"),
        chatSpeak = document.getElementsByClassName('chatSpeak'),
        listRight = document.getElementById('listRight'),
        heightHeader = document.getElementById('header').offsetHeight,
        heightWindow = window.innerHeight,
        heightList = heightWindow - heightHeader,
        list = document.getElementById('list');
        list.style.height = heightList + "px";
        listRight.style.height = heightList + "px";
        chatSpeak[0].style.height = heightList + "px";

        blueE.onclick = function () {
          var i3;
          for (i3 = 0; i3 < speakChatPerson1.length; i3++) {
            speakChatPerson1[i3].style.backgroundColor = colorCustomB;
          }
        }

        pinkE.onclick = function () {
          var i3;
          for (i3 = 0; i3 < speakChatPerson1.length; i3++) {
            speakChatPerson1[i3].style.backgroundColor = colorCustomP;
          }
        }

        greenE.onclick = function () {
          var i3;
          for (i3 = 0; i3 < speakChatPerson1.length; i3++) {
            speakChatPerson1[i3].style.backgroundColor = colorCustomG;
          }
        }

        orangeE.onclick = function () {
          var i3;
          for (i3 = 0; i3 < speakChatPerson1.length; i3++) {
            speakChatPerson1[i3].style.backgroundColor = colorCustomO;
          }
        }

        redE.onclick = function () {
          var i3;
          for (i3 = 0; i3 < speakChatPerson1.length; i3++) {
            speakChatPerson1[i3].style.backgroundColor = colorCustomR;
          }
        }
        

        keySetting.onclick = function () {
          if (i === 0) {
            faRight.classList.add("open");
            listSetting.classList.add("openList");
            listSetting.classList.remove("closeList");
            i = 1;
          } else {
            faRight.classList.remove("open");
            listSetting.classList.remove("openList");
            listSetting.classList.add("closeList");
            i = 0;
          }
        }

        keyColor.onclick = function () {
          if (i2 === 0) {
            faRight2.classList.add("open");
            listColor.classList.add("openList");
            listColor.classList.remove("closeList");
            i2 = 1;
          } else {
            faRight2.classList.remove("open");
            listColor.classList.remove("openList");
            listColor.classList.add("closeList");
            i2 = 0;
          }
        }
  }

}

class Caht2 extends Component {
  render() {
    return (
      <Fragment>
        <div id="chat1" className="row chat">
          <div id="listRight" className="p-0 col-3">
            <ul className="m-0">
              <li className="p-2">
                <img src={avtar1} alt="avtar" className="img-fluid rounded-circle" width="50" />
                <span className="NamePerson"> Faris Wadi</span>
              </li>
              <li className="setting">
                <i className="setting fas fa-cog"></i>
                <span id="keySetting" className="setting"> Setting </span>
                <i id="angleRight" className="setting fas fa-angle-right"></i>
                <ul id="listSetting">
                  <li>
                    <i className="fas fa-bell-slash"></i>
                    <span> Mute Notification</span>
                  </li>
                  <li>
                    <i className="fas fa-trash-alt"></i>
                    <span> Delete Chats</span>
                  </li>
                  <li>
                    <i className="fas fa-ban"></i>
                    <span> Block</span>
                  </li>
                  <li>
                    <i className="fas fa-user-plus"></i>
                    <span> Add in Group</span>
                  </li>
                  <li>
                    <i className="fas fa-pen"></i>
                    <span> Rename Nick Name</span>
                  </li>
                  <li>
                    <i className="fas fa-user-clock"></i>
                    <span> Alert</span>
                  </li>
                </ul>
              </li>
              <li className="colorCheck">
                <i className="colorCheck fas fa-palette"></i>
                <span id="keyColor" className="colorCheck"> colors </span>
                <i id="angleRight2" className="colorCheck fas fa-angle-right"></i>
                <ul id="listColor">
                  <li>
                    <i className="fas Blue fa-paint-brush"></i>
                    <span className="Blue"> Blue 'Default'</span>
                  </li>
                  <li>
                    <i className="fas Red fa-paint-brush"></i>
                    <span className="Red"> Red</span>
                  </li>
                  <li>
                    <i className="fas Pink fa-paint-brush"></i>
                    <span className="Pink"> Pink</span>
                  </li>
                  <li>
                    <i className="fas Green fa-paint-brush"></i>
                    <span className="Green"> Green</span>
                  </li>
                  <li>
                    <i className="fas Orange fa-paint-brush"></i>
                    <span className="Orange"> Orange</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-9 pl-0">
            <div className="row chatSpeak m-0 pr-0 p-3">
              <div className="rounded speakChatPerson12 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute cillum in cupidatat excepteur
                </span>
              </div>
              <div className="offset-4"></div>
              <div className="offset-4"></div>
              <div className="rounded speakChatPerson2 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum 
                </span>
              </div>
              <div className="rounded speakChatPerson12 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua t excepteur
                </span>
              </div>
              <div className="offset-4"></div>
              <div className="offset-4"></div>
              <div className="rounded speakChatPerson2 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officiatat excepteur
                </span>
              </div>
              <div className="rounded speakChatPerson12 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia do exercitation nisi adipisicing anim cupidatat
                </span>
              </div>
              <div className="offset-4"></div>
              <div className="offset-4"></div>
              <div className="rounded speakChatPerson2 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="rounded speakChatPerson12 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="offset-4"></div>
              <div className="offset-4"></div>
              <div className="rounded speakChatPerson2 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia excepteur
                </span>
              </div>
              <div className="rounded speakChatPerson12 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia do exercitation nisi adipisicing anim cupidatat. Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="offset-4"></div>
              <div className="offset-4"></div>
              <div className="rounded speakChatPerson2 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia do exercitation nisi adipisicing anim cupidatat. Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="rounded speakChatPerson12 my-2 col-8">
                <span>
                  Commodo veniam est cillum aute dolor ea laborum aliqua proident. Duis elit laboris voluptate pariatur reprehenderit officia do exercitation nisi adipisicing anim cupidatat. Magna cillum in cupidatat excepteur
                </span>
              </div>
              <div className="offset-4"></div>
              <div>
                &nbsp;
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input className="inputMessage p-2 w-100" type="text" />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

  componentDidMount() {
    var keySetting = document.getElementById('keySetting'),
        listSetting = document.getElementById('listSetting'),
        faRight = document.getElementById('angleRight'),
        keyColor = document.getElementById('keyColor'),
        listColor = document.getElementById('listColor'),
        faRight2 = document.getElementById('angleRight2'),
        redE = document.querySelectorAll('.Red')[1],
        blueE = document.querySelectorAll('.Blue')[1],
        pinkE = document.querySelectorAll('.Pink')[1],
        greenE = document.querySelectorAll('.Green')[1],
        orangeE = document.querySelectorAll('.Orange')[1],
        speakChatPerson12 = document.querySelectorAll('.speakChatPerson12'),
        i = 0,
        i2 = 0,
        colorCustomR = window.getComputedStyle(redE, null).getPropertyValue("color"),
        colorCustomB = window.getComputedStyle(blueE, null).getPropertyValue("color"),
        colorCustomP = window.getComputedStyle(pinkE, null).getPropertyValue("color"),
        colorCustomG = window.getComputedStyle(greenE, null).getPropertyValue("color"),
        colorCustomO = window.getComputedStyle(orangeE, null).getPropertyValue("color"),
        chatSpeak = document.getElementsByClassName('chatSpeak'),
        listRight = document.getElementById('listRight'),
        heightHeader = document.getElementById('header').offsetHeight,
        heightWindow = window.innerHeight,
        heightList = heightWindow - heightHeader,
        list = document.getElementById('list');
        list.style.height = heightList + "px";
        listRight.style.height = heightList + "px";
        chatSpeak[0].style.height = heightList + "px";

        blueE.onclick = function () {
          var i3;
          for (i3 = 0; i3 < speakChatPerson12.length; i3++) {
            speakChatPerson12[i3].style.backgroundColor = colorCustomB;
          }
        }

        pinkE.onclick = function () {
          var i3;
          for (i3 = 0; i3 < speakChatPerson12.length; i3++) {
            speakChatPerson12[i3].style.backgroundColor = colorCustomP;
          }
        }

        greenE.onclick = function () {
          var i3;
          for (i3 = 0; i3 < speakChatPerson12.length; i3++) {
            speakChatPerson12[i3].style.backgroundColor = colorCustomG;
          }
        }

        orangeE.onclick = function () {
          var i3;
          for (i3 = 0; i3 < speakChatPerson12.length; i3++) {
            speakChatPerson12[i3].style.backgroundColor = colorCustomO;
          }
        }

        redE.onclick = function () {
          var i3;
          for (i3 = 0; i3 < speakChatPerson12.length; i3++) {
            speakChatPerson12[i3].style.backgroundColor = colorCustomR;
          }
        }
        

        keySetting.onclick = function () {
          if (i === 0) {
            faRight.classList.add("open");
            listSetting.classList.add("openList");
            listSetting.classList.remove("closeList");
            i = 1;
          } else {
            faRight.classList.remove("open");
            listSetting.classList.remove("openList");
            listSetting.classList.add("closeList");
            i = 0;
          }
        }

        keyColor.onclick = function () {
          if (i2 === 0) {
            faRight2.classList.add("open");
            listColor.classList.add("openList");
            listColor.classList.remove("closeList");
            i2 = 1;
          } else {
            faRight2.classList.remove("open");
            listColor.classList.remove("openList");
            listColor.classList.add("closeList");
            i2 = 0;
          }
        }
  }

}

export {Caht1};
export {Caht2};