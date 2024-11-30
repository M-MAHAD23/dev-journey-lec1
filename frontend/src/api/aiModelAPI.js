import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/models';

// Fetch all models
export const fetchModels = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

// Create a new model
export const createModel = async (modelData) => {
  await axios.post(API_BASE_URL, modelData);
};

// Update an existing model by ID
export const updateModel = async (id, modelData) => {
  await axios.put(`${API_BASE_URL}/${id}`, modelData);
};

// Delete a model by ID
export const deleteModel = async (id) => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};
