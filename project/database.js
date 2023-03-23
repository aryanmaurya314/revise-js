const mongoose = require('mongoose');

const connectDb = async () => {
  const db = await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to DB');
  return db;
};

module.exports = connectDb;
