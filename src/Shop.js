import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Shop() {
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

    // useEffect(() => {
    //     fetchItem();
    // }, []);

    // const [items, setItem] = useState({});

    // const fetchItem = async () => {
    //     const items = await [
    //         {
    //             itemId: 1,
    //             name: 'Ball',
    //         },
    //         {
    //             itemId: 2,
    //             name: 'Basket',
    //         },
    //     ];

    //     console.log(items)

    //     setItem(items);
    // };

    return (
        <div>
            <h1>Shop Page</h1>

            {
                items.map((item, _index) => {
                    return (
                        <h1 key={item.itemId}> <Link to={`/shop/${item.itemId}`}> {item.name} </Link></h1>
                    )
                })
            }

        </div>
    );
}

export default Shop;
