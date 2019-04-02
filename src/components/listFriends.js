import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import avtar1 from '../image/avatar.png';
import avtar2 from '../image/avatar2.png';
import avtar3 from '../image/avatar3.png';
import avtar4 from '../image/avatar4.png';
import avtar5 from '../image/avatar5.png';
import avtar6 from '../image/avatar6.png';
import './listFriends.css';

class ListFriend extends Component {
  render() {
    return (
      <div id="list" className="list">
        <ul className="text-left mb-0 p-0">
        
            <li className="friend py-2 px-3">
            <Link to="/chats/AliSamer">
                <img alt="avatar" src={avtar1} className="rounded-circle img-fluid" width="30" />
                <span> Ali Samer</span>
            </Link>
            </li>
        
            <li className="friend py-2 px-3">
            <Link to="/chats/FarisWadi">
                <img alt="avatar" src={avtar2} className="rounded-circle img-fluid" width="30" />
                <span> Faris Wadi</span>
            </Link>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar3} className="rounded-circle img-fluid" width="30" />
                <span> Karam Ahm</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar4} className="rounded-circle img-fluid" width="30" />
                <span> Moh Wadi</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar5} className="rounded-circle img-fluid" width="30" />
                <span> Wisam O</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar6} className="rounded-circle img-fluid" width="30" />
                <span> Ali Wadi</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar1} className="rounded-circle img-fluid" width="30" />
                <span> Ali Faris</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar2} className="rounded-circle img-fluid" width="30" />
                <span> Abood Wadi</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar3} className="rounded-circle img-fluid" width="30" />
                <span> Ali Fadi</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar4} className="rounded-circle img-fluid" width="30" />
                <span> Faris Faris</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar5} className="rounded-circle img-fluid" width="30" />
                <span> Ali Wes</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar6} className="rounded-circle img-fluid" width="30" />
                <span> Sami Ali</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar1} className="rounded-circle img-fluid" width="30" />
                <span> Sami Samer</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar2} className="rounded-circle img-fluid" width="30" />
                <span> Faris Sami</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar3} className="rounded-circle img-fluid" width="30" />
                <span> Ali Sami</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar4} className="rounded-circle img-fluid" width="30" />
                <span> Faris Wadi</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar5} className="rounded-circle img-fluid" width="30" />
                <span> Ali Samer</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar6} className="rounded-circle img-fluid" width="30" />
                <span> Faris Wadi</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar1} className="rounded-circle img-fluid" width="30" />
                <span> Ali Samer</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar2} className="rounded-circle img-fluid" width="30" />
                <span> Faris Wadi</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar3} className="rounded-circle img-fluid" width="30" />
                <span> Ali Samer</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar4} className="rounded-circle img-fluid" width="30" />
                <span> Faris Wadi</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar5} className="rounded-circle img-fluid" width="30" />
                <span> Ali Samer</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar6} className="rounded-circle img-fluid" width="30" />
                <span> Faris Wadi</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar1} className="rounded-circle img-fluid" width="30" />
                <span> Ali Samer</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar2} className="rounded-circle img-fluid" width="30" />
                <span> Faris Wadi</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar3} className="rounded-circle img-fluid" width="30" />
                <span> Ali Samer</span>
            </li>
            <li className="friend py-2 px-3">
                <img alt="avatar" src={avtar4} className="rounded-circle img-fluid" width="30" />
                <span> Faris Wadi</span>
            </li>
        </ul>
      </div>
    )
  }
}

export default ListFriend;