const mongoose = require('mongoose');

exports.connectDB = async () => {
  mongoose.connect(process.env.MONGO_URI )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
};

//exports.module= connectDB;   
