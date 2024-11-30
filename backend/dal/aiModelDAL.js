const AIModel = require('../models/aiModel');

// Create a new AI Model
async function createModel(data) {
  const newModel = new AIModel(data);
  return await newModel.save();
}

// Get all AI Models
async function getAllModels() {
  return await AIModel.find();
}

// Update an AI Model by ID
async function updateModel(id, data) {
  return await AIModel.findByIdAndUpdate(id, data, { new: true });
}

// Delete an AI Model by ID
async function deleteModel(id) {
  return await AIModel.findByIdAndDelete(id);
}

module.exports = {
  createModel,
  getAllModels,
  updateModel,
  deleteModel,
};
