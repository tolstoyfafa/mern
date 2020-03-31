import mongoose, { Schema } from 'mongoose';
import personSc from '../models/person';

const Person = mongoose.model('person', personSc);
export const signUp = (req, res) => {
  let newPerson = new Person(req.body);
  newPerson.save((err, createdPlayer) => {
    if (err) {
      res.send(err);
    }

    res.json(createdPlayer);
  });
};
