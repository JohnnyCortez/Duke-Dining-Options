import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
  return (
    <div>
      <Link to={props.link}>
        <button>Menu</button>
      </Link>
      <br/>
    </div>
  );
}

export default Button;