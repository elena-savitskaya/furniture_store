import React, { Component } from 'react';
import './_categories.scss';

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'chairs',
                    name: 'Chairs'
                },
                {
                    key: 'armchair',
                    name: 'Armchair'
                },
                {
                    key: 'tables',
                    name: 'Tables'
                },
                {
                    key: 'sofa',
                    name: 'Sofa'
                },
                {
                    key: 'light',
                    name: 'Light'
                },
            ]
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='categories'>
                    {this.state.categories.map(el => (
                        <div key={el.key} onClick={() => this.props.chooseCategory(el.key)} >{el.name}</div>
                    ))}
                </div>
            </div>
        )
    }
}

export { Categories }
