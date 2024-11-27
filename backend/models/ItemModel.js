const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model('Item', ItemSchema);
