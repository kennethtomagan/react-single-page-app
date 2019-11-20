import React from 'react';
import './App.css';

function ItemDetail({ match }) {
    const items = [
        {
            itemId: 1,
            name: 'Ball',
        },
        {
            itemId: 2,
            name: 'Basket',
        },
    ];

    const item = items.find(element => {
        return element.itemId == match.params.id
    })

    return (
        <div>
            <h1>{item.name}</h1>
        </div>
    );
}

export default ItemDetail;
