import mongoose from 'mongoose';
import messageSchema from '../models/Message';
import userSchema from '../models/User';

const Message = mongoose.model('Message', messageSchema);
const User = mongoose.model('User', userSchema);

export const addMessage = (req, res) => {
  let user = User.findOne({ userName: req.body.userName });
  if (!user) {
    user = new User({ userName: req.body.userName });
  }
  let msg = new Message({ msg: req.body.msg });
  Message.save(msg);
  user.messages.push(msg);
  user.save();
  return res.json(user);
};
