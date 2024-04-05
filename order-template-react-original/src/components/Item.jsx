import { useState } from "react"


export default function Item() {
    const [item, setItem] = useState('');
    const [itemQuantity, setItemQuantity] = useState(0);


    const handleChange = (e) => {
        const { item, quantity } = e.target;
        setPersonalDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onsubmit()
    }

    return (
        <form>
            <div>
                <label>Item</label>
                <select>
                    <option>Orange</option>
                    <option>Banana</option>
                    <option>Apple</option>
                </select>
                <label>Quantity</label>
                <input type="number" />
            </div>
        </form>
    )
}