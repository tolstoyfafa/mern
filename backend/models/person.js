import { Schema } from 'mongoose';

const personSc = new Schema({
  name: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export default personSc;
