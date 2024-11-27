import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getItems, addItem } from '../redux/itemsSlice';
import ItemList from './ItemList';

export const Item = () => {
  return (
    <div>
      <h1>Item</h1>      
      <ItemList />
    </div>
  );
};

export default Item;
