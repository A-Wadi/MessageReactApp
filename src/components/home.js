import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
            <div id="linksHome" className="linksHome py-3 pl-0 col-3">
                <ul>
                    <li className="linkHome">
                        <Link to="/">
                            <i className="fas fa-user-alt"></i>
                            <span> Home</span>
                        </Link>
                    </li>
                    <li className="linkHome">
                        <Link to="/chats/AliSamer">
                            <i className="fas fa-comment-alt"></i>
                            <span> Chats</span>
                        </Link>
                    </li>
                    <li className="linkHome">
                        <Link to="/videos">
                            <i className="fas fa-film"></i>
                            <span> Videos</span>
                        </Link>
                    </li>
                    <li className="linkHome">
                        <Link to="/games">
                            <i className="fas fa-gamepad"></i>
                            <span> Games</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div id="Posts" className="Posts p-3 col-9">
                <div className="row">
                    <div className="col-12">
                        <div className="p-3 mb-0 text-justify border">
                            Est voluptate reprehenderit veniam sunt aliqua dolore velit in occaecat. Sint do reprehenderit commodo non ipsum anim enim labore. Consequat Lorem sunt labore culpa labore aliqua adipisicing enim in cillum qui in. Reprehenderit non laboris sint qui qui cupidatat. Deserunt ad deserunt pariatur elit non nulla est aliquip. Sint id dolor anim amet consectetur. Deserunt ipsum sunt do amet et dolor incididunt laborum reprehenderit nostrud nostrud ad aliqua.

                            Sint cillum magna sit laboris dolore exercitation eu occaecat do amet cupidatat irure. Ullamco duis sit sunt ut ad ipsum velit. Consectetur aliquip excepteur sint aliquip id consequat ex duis eu in ea in commodo nisi. Excepteur fugiat aliqua veniam ea eiusmod officia deserunt cillum do laboris sunt incididunt elit. Incididunt eu consequat officia et anim.
                            <p className="mb-0 mt-3">
                                47 <i className="fas fa-heart"></i>
                            </p>
                        </div>
                        <div className="border p-2">
                            <div className="row text-center">
                                <div className="col-4">
                                    <i className="fas fa-heart"></i>
                                    <span> Love</span>
                                </div>
                                <div className="col-4">
                                    <i className="fas fa-comment"></i>
                                    <span> Comment</span>
                                </div>
                                <div className="col-4">
                                    <i className="fas fa-share-alt"></i>
                                    <span> Share</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="p-3 mb-0 text-justify border">
                            Est voluptate reprehenderit veniam sunt aliqua dolore velit in occaecat. Sint do reprehenderit commodo non ipsum anim enim labore. Consequat Lorem sunt labore culpa labore aliqua adipisicing enim in cillum qui in. Reprehenderit non laboris sint qui qui cupidatat. Deserunt ad deserunt pariatur elit non nulla est aliquip. Sint id dolor anim amet consectetur. Deserunt ipsum sunt do amet et dolor incididunt laborum reprehenderit nostrud nostrud ad aliqua.

                            Sint cillum magna sit laboris dolore exercitation eu occaecat do amet cupidatat irure. Ullamco duis sit sunt ut ad ipsum velit. Consectetur aliquip excepteur sint aliquip id consequat ex duis eu in ea in commodo nisi. Excepteur fugiat aliqua veniam ea eiusmod officia deserunt cillum do laboris sunt incididunt elit. Incididunt eu consequat officia et anim.
                            <p className="mb-0 mt-3">
                                47 <i className="fas fa-heart"></i>
                            </p>
                        </div>
                        <div className="border p-2">
                            <div className="row text-center">
                                <div className="col-4">
                                    <i className="fas fa-heart"></i>
                                    <span> Love</span>
                                </div>
                                <div className="col-4">
                                    <i className="fas fa-comment"></i>
                                    <span> Comment</span>
                                </div>
                                <div className="col-4">
                                    <i className="fas fa-share-alt"></i>
                                    <span> Share</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="p-3 mb-0 text-justify border">
                            Est voluptate reprehenderit veniam sunt aliqua dolore velit in occaecat. Sint do reprehenderit commodo non ipsum anim enim labore. Consequat Lorem sunt labore culpa labore aliqua adipisicing enim in cillum qui in. Reprehenderit non laboris sint qui qui cupidatat. Deserunt ad deserunt pariatur elit non nulla est aliquip. Sint id dolor anim amet consectetur. Deserunt ipsum sunt do amet et dolor incididunt laborum reprehenderit nostrud nostrud ad aliqua.

                            Sint cillum magna sit laboris dolore exercitation eu occaecat do amet cupidatat irure. Ullamco duis sit sunt ut ad ipsum velit. Consectetur aliquip excepteur sint aliquip id consequat ex duis eu in ea in commodo nisi. Excepteur fugiat aliqua veniam ea eiusmod officia deserunt cillum do laboris sunt incididunt elit. Incididunt eu consequat officia et anim.
                            <p className="mb-0 mt-3">
                                47 <i className="fas fa-heart"></i>
                            </p>
                        </div>
                        <div className="border p-2">
                            <div className="row text-center">
                                <div className="col-4">
                                    <i className="fas fa-heart"></i>
                                    <span> Love</span>
                                </div>
                                <div className="col-4">
                                    <i className="fas fa-comment"></i>
                                    <span> Comment</span>
                                </div>
                                <div className="col-4">
                                    <i className="fas fa-share-alt"></i>
                                    <span> Share</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
  }

  componentDidMount () {
    var heightHeader = document.getElementById('header').offsetHeight,
        heightWindow = window.innerHeight,
        heightList = heightWindow - heightHeader,
        list3 = document.getElementById('linksHome'),
        list2 = document.getElementById('Posts');        
        list3.style.height = heightList + "px"; 
        list2.style.height = heightList + "px";        
  }

}

export default Home;