import { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const personSc = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
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

personSc.pre('save', function (next) {
  var person = this;

  // only hash the password if it has been modified (or is new)
  if (!person.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(person.password, salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      person.password = hash;
      next();
    });
  });
});
export default personSc;
