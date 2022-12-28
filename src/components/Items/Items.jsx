import React from 'react'
import { Item } from './Item'
import './_item.scss';

class Items extends React.Component {
    render() {
        return (
            <main>
                <div className='container'>
                    <div className='items'>
                       {this.props.items.map(el => (
                        <Item key={el.id} item={el} onAdd={this.props.onAdd} onShowItem={this.props.onShowItem} />
                    ))} 
                    </div>
                </div>
            </main>
        )
    }
}

export { Items }

