import { Schema } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  createDate: {
    type: Date,
    default: Date.now
  }
});

export default userSchema;
