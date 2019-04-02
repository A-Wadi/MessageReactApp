import React, { Component } from 'react';
import './game.css';

class Game extends Component {
  render() {
    return (
      <div>
          <div className="container">
            <div className="row">
                <div className="col-12 my-2">
                    <iframe className="iframeGame" src="https://colors-javascript.netlify.com/" title="game" width="100%" height="580"></iframe>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Game;