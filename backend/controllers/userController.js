import mongoose from 'mongoose';
import userSchema from '../models/User';

const User = mongoose.model('User', userSchema);

export const getAllUsers = (req, res) => {
  User.find().then(users => {
    return res.json({ users });
  });
};
