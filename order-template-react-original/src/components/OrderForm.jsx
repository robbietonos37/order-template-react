import { useState } from "react"


export default function OrderForm() {
    const [[items], setItems] = useState([]);
    const addItemButton = document.getElementsByClassName('addItem');

    addItemButton.addEventListener


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

    const addItemForm = () => {
        return <Item />;
    }

    return (
        <form>
            <div>
                <button className="addItem" onClick={addItemForm}>Add Item</button>
            </div>
        </form>
    )
}