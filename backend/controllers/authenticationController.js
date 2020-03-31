import mongoose, { Schema } from 'mongoose';
import personSc from '../models/person';
import bcrypt from 'bcrypt';
import moment from 'moment';
import jwt from 'jwt-simple';

const Person = mongoose.model('person', personSc);

export const signUp = (req, res) => {
  console.log(req.body);
  let newPerson = new Person(req.body);

  newPerson.save((err, created) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.json(created);
  });
};

export const login = async (req, res) => {
  const person = await Person.findOne({ email: req.body.email });
  if (!person) {
    return res.send('Person not exists');
  }
  const password = req.body.password;
  bcrypt.compare(password, person.password, function (err, suc) {
    if (suc) {
      const paylaod = {
        expiration: moment().add(1, 'hour').unix,
        iat: moment().unix(),
        issuer: person.id
      };
      let token = jwt.encode(paylaod, process.env.TOKEN_SECRET);
      res.json({
        firstName: person.firstName,
        lastName: person.lastName,
        token: 'Bearer ' + token
      });
    }
    res.send('authentication faillure');
  });
};

export const isAuthenticated = (req, res, next) => {
  console.log(req.headers);
  if (!req.headers.authorization) {
    return res.status(401).send('MissingToken');
  }
  const tokenIn = req.headers.authorization.split(' ')[1];
  let paylaod = null;
  try {
    paylaod = jwt.decode(tokenIn, process.env.TOKEN_SECRET);
  } catch (error) {
    return res.status(401).send('Authentication faillure');
  }
  if (paylaod.expiration <= moment().unix()) {
    res.status(401).send('ExpiredToken');
  }
  const personId = paylaod.issuer;
  Person.findById(personId, (err, person) => {
    if (err) {
      return res.status(404).send('Not found');
    }
    req.userId = personId;
    next();
  });
};

export const getAll = (req, res) => {
  res.send('TOTO');
};
