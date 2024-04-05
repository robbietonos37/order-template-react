import { useState } from "react"


export default function Item({ index, item, onChange }) {
    const handleproductChange = (e) => {
        const newItem = { ...item, product: e.target.value };
        onChange(index, newItem);
    }
    // const [item, setItem] = useState('');
    // const [itemQuantity, setItemQuantity] = useState(0);


    const handleQuantityChange = (e) => {
        const newItem = { ...item, quantity: parseInt(e.target.value) }
        onChange(index, newItem);
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onsubmit()
    // }

    return (
        <form>
            <div>
                <label>Item</label>
                <select value={item.product} onChange={handleproductChange}>
                    <option value="Orange">Orange</option>
                    <option value="Banana">Banana</option>
                    <option value="Apple">Apple</option>
                </select>
                <label>Quantity</label>
                <input type="number"
                    value={item.quantity}
                    onChange={handleQuantityChange}
                />
            </div>
        </form>
    )
}