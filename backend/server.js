const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { createModel, getAllModels, updateModel, deleteModel } = require('./dal/aiModelDAL');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/aiModelsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// CRUD Endpoints

// Create Model
app.post('/api/models', async (req, res) => {
  try {
    const newModel = await createModel(req.body);
    res.json({ message: 'Model created successfully', newModel });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create model' });
  }
});

// Read Models
app.get('/api/models', async (req, res) => {
  try {
    const models = await getAllModels();
    res.json(models);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch models' });
  }
});

// Update Model
app.put('/api/models/:id', async (req, res) => {
  try {
    const updatedModel = await updateModel(req.params.id, req.body);
    res.json({ message: 'Model updated successfully', updatedModel });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update model' });
  }
});

// Delete Model
app.delete('/api/models/:id', async (req, res) => {
  try {
    await deleteModel(req.params.id);
    res.json({ message: 'Model deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete model' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
