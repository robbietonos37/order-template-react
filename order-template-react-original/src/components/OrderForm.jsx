import { useState } from "react";
import Item from './Item';


export default function OrderForm() {
    const [items, setItems] = useState([]);
    const addItemButton = document.getElementsByClassName('addItem');

    const handleAddItem = () => {
        setItems([...items, { product: "", quantity: 0 }]);
    };

    const handleItemChange = (index, newItem) => {
        const newItems = [...items];
        newItems[index] = newItem;
        setItems(newItems);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //onsubmit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                {items && items.map((item, index) => (
                    <Item
                        key={index}
                        index={index}
                        item={item}
                        onChange={handleItemChange}
                    />
                ))}
                <button className="addItem" onClick={handleAddItem}>Add Item</button>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}