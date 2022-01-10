import React from "react";
import { CartItemType } from "../../App";

import './Item.scss'

type Props = {
    item: CartItemType
    handleAddToCart: (clickedItem: CartItemType) => void
}

export const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <div className="card">
        <img src={item.img} alt={item.name} />
        <div>
            <p>{item.name} - ${item.price}</p>
        </div>
        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
    </div>
)
