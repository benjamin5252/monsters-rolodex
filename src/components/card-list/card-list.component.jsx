// import React from 'react';
import React, { Component } from 'react';
import './card-list.style.css';
import Card from '../card/card.component'

// export const CardList = (props) => {
// console.log(props);
// return (<div className='card-list'>{props.children}</div>);
// }
class CardList extends Component {
    state = {  }
    render() { 
        return ( <div className='card-list'>
             {this.props.monsters.map(monster => <Card key={monster.id} monster={monster}></Card>)}
            </div> );
    }
}
 
export default CardList;