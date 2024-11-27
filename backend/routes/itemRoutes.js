const express = require('express');
const router = express.Router();
const Item = require('../models/ItemModel');
const {addItem,deleteItem,getAllItems,getOneItem, updateItem} = require('../controllers/itemController')

// Create
router.post('/', addItem);

// Read
router.get('/', getAllItems);

// Update
router.put('/:id', updateItem);

// Delete
router.delete('/:id', deleteItem);

module.exports = router;
