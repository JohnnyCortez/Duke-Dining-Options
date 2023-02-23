import React from 'react';
import "../App.css"
import Button from '../components/button';

const Location = (props) => {
    return(
        <div id="image">
            <img class="image" src={props.image} />
            <h3>{props.name}</h3>
            <p>{props.des}</p>
            <Button link={props.link} />
            <br/>
        </div>
    )
}

export default Location;