const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 4,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      minLength: 10,
      maxLength: 10,
    },
    userType: {
      type: String,
      enum: ['ADMIN', 'MEMBER', 'GUEST'],
      required: true,
    },
  },
  { timestamps: true }
);

const User = new mongoose.model('User', UserSchema);

module.exports = User;
