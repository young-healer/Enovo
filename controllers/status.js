const moment = require('moment');
const Status = require('../models/status');

const status = new Status();


module.exports.getStatus = (req, res) => {
  status.getAll().then(values => {
    res.send(values);
  });
};

module.exports.getStatusByDate = (req, res) => {
  let timestamp = moment(req.params.date).format('L');
  timestamp = +moment(timestamp).format('X');

  status.getStatusByTS(timestamp).then(values => {
    res.send(values);
  });
};