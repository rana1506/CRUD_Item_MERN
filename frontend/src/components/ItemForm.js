import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, addItem } from '../redux/itemsSlice';

export const ItemForm = ({ onSave }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  

  const [formData, setFormData] = useState({ name: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() !== '') {
      dispatch(addItem(formData))
      setFormData({ name: '', description: '' }); // Reset form after saving
    } else {
      alert('Name is required!');
    }
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ItemForm;
