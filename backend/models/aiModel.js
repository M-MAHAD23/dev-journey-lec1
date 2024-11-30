const mongoose = require('mongoose');

const AIModelSchema = new mongoose.Schema({
  modelID: Number,
  name: String,
  accuracy: Number,
});

const AIModel = mongoose.model('AIModel', AIModelSchema);

module.exports = AIModel;
