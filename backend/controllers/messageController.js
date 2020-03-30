import mongoose from 'mongoose';
import userSchema from '../models/User';
import messageSchema from '../models/Message';

const Message = mongoose.model('Message', messageSchema);

export const addMessage = (req, res) => {
  User.find().then(users => {
    return res.json({ users });
  });
};
