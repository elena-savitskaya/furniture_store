import React from 'react'
import './_item.scss';

class Item extends React.Component {
    render() {
        return (
                <div className='item'>
                    <img onClick={() => this.props.onShowItem(this.props.item)} src={"./img/" + this.props.item.img} alt='img'/>
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                    <b>{this.props.item.price} $</b>
                    <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>            
        )
    }
}

export { Item }

