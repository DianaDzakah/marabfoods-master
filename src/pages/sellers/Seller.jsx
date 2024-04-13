import React, { useState } from 'react';
import styles from "./Seller.module.css";

const Seller = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    origin: '',
    type: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = () => {
    if (isEditing) {
      // Update existing item
      const updatedItems = [...items];
      updatedItems[editIndex] = newItem;
      setItems(updatedItems);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add new item
      setItems([...items, newItem]);
    }

    // Clear the form
    setNewItem({
      name: '',
      price: '',
      origin: '',
      type: '',
    });
  };

  const handleEditItem = (index) => {
    // Set the editing state and populate the form with the item details
    setIsEditing(true);
    setEditIndex(index);
    setNewItem(items[index]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h2 style={{ color: '#FFA000' }}>Seller Dashboard</h2>

      <div>
        <h3 style={{ color: 'green' }}>{isEditing ? 'Edit Item' : 'Add Item'}</h3>
        <label>
          Name:
          <input type="text" name="name" value={newItem.name} onChange={handleInputChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={newItem.price} onChange={handleInputChange} />
        </label>
        <label>
          Origin:
          <input
            type="text"
            name="origin"
            value={newItem.origin}
            onChange={handleInputChange}
            placeholder="Ghana, Imported, etc."
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={newItem.type}
            onChange={handleInputChange}
            placeholder="Fruits, Vegetables, Grains, etc."
          />
        </label>
        <button style={{ backgroundColor: '#4CAF50', color: 'white' }} onClick={handleAddItem}>
          {isEditing ? 'Update Item' : 'Add Item'}
        </button>
      </div>

      <div>
        <h3 style={{ color: 'orange' }}>Manage Items</h3>
        {items.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
            <span>{item.name} - ${item.price}</span>
            <p>Origin: {item.origin}</p>
            <p>Type: {item.type}</p>
            <button style={{ backgroundColor: '#FFA000', color: 'white', marginRight: '5px' }} onClick={() => handleEditItem(index)}>
              Edit
            </button>
            <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleDeleteItem(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seller;
