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

    key.fillStyle = "#fff";
    key.fillRect(608, 0, 75, 200);

    key.fillStyle = "#fff";
    key.fillRect(684, 0, 75, 200);

    key.fillStyle = "#fff";
    key.fillRect(760, 0, 75, 200);

    key.fillStyle = "#fff";
    key.fillRect(836, 0, 75, 200);

    key.fillStyle = "#fff";
    key.fillRect(912, 0, 75, 200);

    key.fillStyle = "#fff";
    key.fillRect(988, 0, 75, 200);

    key.fillStyle = "#fff";
    key.fillRect(1064, 0, 75, 200);

    key.fillStyle = "#fff";
    key.fillRect(1140, 0, 75, 200);

    key.fillStyle = "#fff";
    key.fillRect(1216, 0, 75, 200);

    key.fillStyle = "#fff";
    key.fillRect(1292, 0, 75, 200);

    key.fillStyle = "#fff";
    key.fillRect(1368, 0, 75, 200);

    key.fillStyle = "#000";
    key.fillRect(50, 0, 50, 110);

    key.fillStyle = "#000";
    key.fillRect(126, 0, 50, 110);

    key.fillStyle = "#000";
    key.fillRect(277, 0, 50, 110);

    key.fillStyle = "#000";
    key.fillRect(355, 0, 50, 110);

    key.fillStyle = "#000";
    key.fillRect(431, 0, 50, 110);

    key.fillStyle = "#000";
    key.fillRect(583, 0, 50, 110);

    key.fillStyle = "#000";
    key.fillRect(659, 0, 50, 110);

    key.fillStyle = "#000";
    key.fillRect(811, 0, 50, 110);

    key.fillStyle = "#000";
    key.fillRect(887, 0, 50, 110);

    key.fillStyle = "#000";
    key.fillRect(963, 0, 50, 110);

    key.fillStyle = "#000";
    key.fillRect(1115, 0, 50, 110);

    key.fillStyle = "#000";
    key.fillRect(1191, 0, 50, 110);

    key.fillStyle = "#000";
    key.fillRect(1343, 0, 50, 110);
  }

  render () {
    return(
      <div id="keyboard">
        <div id="control-panel"></div>
        <canvas ref="canvas" id="canvas" height={200} width={1440}>

        </canvas>
      </div>
    )
  }
}

export default Keyboard;
