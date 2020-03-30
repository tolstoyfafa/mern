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
  Player.findOne({ id: req.params.email }, { _id: 0, __v: 0 })
    .then(player => {
      console.log(player);
      if (!player) {
        res.status(404);
        return res.json({
          status: '404',
          message: 'player not found with this ID: ' + req.params.id
        });
      }
      res.status(200);
      return res.json({
        status: '200',
        message: 'player Fetched successfully.',
        player: player
      });
    })
    .catch(err => {
      res.status(500);
      return res.json({
        status: '500',
        message: 'Something wrong retrieving player with ID: ' + req.params.id
      });
    });
};

export const deleteById = (req, res) => {
  Player.findOne({ id: req.params.id }, { _id: 0 })
    .then(player => {
      if (!player) {
        res.status(404);
        return res.json({
          status: '404',
          message: 'player with id ' + req.params.id + ' not found.'
        });
      }
      Player.deleteOne({ id: req.params.id }, function (err, result) {
        if (err) {
          res.status(400);
          return res.json({
            status: '400',
            message: 'Could not delete player ID: ' + req.params.id
          });
        }
        res.status(200);
        return res.json({
          status: '200',
          message: 'player with id : ' + req.params.id + ' deleted',
          result: result
        });
      });
    })
    .catch(err => {
      res.status(500);
      return res.json({
        status: '500',
        message: 'Something wrong retrieving player with ID: ' + req.params.id
      });
    });
};

export const update = (req, res) => {
  Player.findByIdAndUpdate({ id: req.params.id }, req.body)
    .then(result => {
      if (!result) {
        res.status(400);
        res.json({
          status: '400',
          message: 'Could not update player ID: ' + req.params.id,
          playerSent: req.body
        });
      }
      res.status(200);
      res.json({
        status: '200',
        message: 'player with id: ' + req.params.id + ' updated.',
        player: result
      });
    })
    .catch(err => {
      res.status(500);
      return res.json({
        status: '500',
        message: 'Something wrong updating player with ID: ' + req.params.id
      });
    });
};
