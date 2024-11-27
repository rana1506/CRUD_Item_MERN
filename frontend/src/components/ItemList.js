import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getItems, updateItem, deleteItem } from '../redux/itemsSlice';

export const ItemList = () => {
  const dispatch=useDispatch()
  const items = useSelector((state) => state.item.items);
  
  const [editMode, setEditMode] = useState(null); // Tracks the item being edited
  const [editData, setEditData] = useState({ name: '', description: '' }); // Tracks the edit form values
  
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  
  const handleEditClick = (item) => {
    setEditMode(item._id);
    setEditData({ name: item.name, description: item.description });
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setEditData({ name: '', description: '' });
  };

  const handleSaveEdit = () => {
    const id=editMode
    const item=editData
    dispatch(updateItem({id, item}));
    handleCancelEdit();
  };

  const handleDeleteClick = (_id) => {
    dispatch(deleteItem(_id))
  }

  return (
    <div>
      <h2>Item List</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              {editMode === item._id ? (
                <div>
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  />
                  <textarea
                    value={editData.description}
                    onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                  />
                  <button onClick={handleSaveEdit}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </div>
              ) : (
                <div>
                  <strong>{item.name}</strong>: {item.description}
                  <button onClick={() => handleEditClick(item)}>Edit</button>
                  <button onClick={() => handleDeleteClick(item._id)}>Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items available. Add some!</p>
      )}
    </div>
  );
};


export default ItemList;
