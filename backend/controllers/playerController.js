import mongoose from 'mongoose';
import playerSchema from '../models/playerModel';

const Player = mongoose.model('Player', playerSchema);

export const add = (req, res) => {
  let newPlayer = new Player(req.body);
  newPlayer.save((err, createdPlayer) => {
    if (err) {
      res.send(err);
    }

    res.json(createdPlayer);
  });
};

export const getAll = (req, res) => {
  Player.find({}, (err, players) => {
    if (err) {
      res.send('an error occured while trying to get players');
    }

    res.send(players);
  });
};

export const findById = (req, res) => {
  Player.findOne({ id: req.params.id }).then(player => {
    return res.json({ player });
  });
};

export const deleteById = (req, res) => {
  Player.findOneAndDelete({ id: req.params.id }).then(player => {
    return res.json({ player });
  });
};

export const update = (req, res) => {
  Player.findOneAndUpdate({ id: req.params.id }).then(player => {
    return res.json({ player });
  });
};
