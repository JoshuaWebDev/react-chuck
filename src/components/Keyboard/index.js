import React from 'react';
import Key from '../Key';
import './keyboard.css';

class Keyboard extends React.Component {

  componentDidMount() {
    const canvas = this.refs.canvas;
    const key = canvas.getContext("2d");

    key.fillStyle = "#fff";
    key.fillRect(0, 0, 75, 200);

    key.fillStyle = "#fff";
    key.fillRect(76, 0, 75, 200);
    
    key.fillStyle = "#fff";
    key.fillRect(152, 0, 75, 200);
    
    key.fillStyle = "#fff";
    key.fillRect(228, 0, 75, 200);
    
    key.fillStyle = "#fff";
    key.fillRect(304, 0, 75, 200);

    key.fillStyle = "#fff";
    key.fillRect(380, 0, 75, 200);

    key.fillStyle = "#fff";
    key.fillRect(456, 0, 75, 200);

    key.fillStyle = "#fff";
    key.fillRect(532, 0, 75, 200);
  }

  render () {
    return(
      <div id="keyboard">
        <div id="control-panel"></div>
        <canvas ref="canvas" height={200} width={1480}>
          
        </canvas>
      </div>
    )
  }
}

export default Keyboard;