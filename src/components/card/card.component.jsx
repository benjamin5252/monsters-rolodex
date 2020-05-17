import React, { Component } from 'react';
import './card.style.css'
class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='card-container'>
            <img src={`https://robohash.org/${this.props.monster.id}?set=set4&size=180x180`} alt="monster"/>
             <h2>{this.props.monster.name}</h2>
             <p>{this.props.monster.email}</p>
            </div>


         );
    }
}
 
export default Card;