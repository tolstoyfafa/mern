import { Schema } from 'mongoose';

const messageSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  username: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    required: true
  }
});

export default messageSchema;
