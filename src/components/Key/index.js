import React from 'react';
import './key.css';

function Key(props) {

  if (props.white) return <div className="key white-key"></div>;

  if (props.black) return <div className="key black-key"></div>;
}

export default Key;