import React, { useState, useEffect } from 'react';
import { fetchModels, createModel, updateModel, deleteModel } from './api/aiModelAPI';

function App() {
  const [models, setModels] = useState([]);
  const [newModel, setNewModel] = useState({ modelID: '', name: '', accuracy: '' });

  useEffect(() => {
    loadModels();
  }, []);

  const loadModels = async () => {
    const data = await fetchModels();
    setModels(data);
  };

  const handleCreate = async () => {
    await createModel(newModel);
    setNewModel({ modelID: '', name: '', accuracy: '' });
    loadModels();
  };

  const handleUpdate = async (id) => {
    await updateModel(id, newModel);
    loadModels();
  };

  const handleDelete = async (id) => {
    await deleteModel(id);
    loadModels();
  };

  // Inline styles for centering and preventing scroll
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full viewport height
    textAlign: 'center',
    padding: '20px', // Add padding for spacing but avoid large padding
    overflow: 'hidden', // Prevent scrollbars
  };

  return (
    <div style={containerStyle}>
      <h1>AI Models CRUD</h1>
      <div>
        <input
          type="number"
          placeholder="Model ID"
          value={newModel.modelID}
          onChange={e => setNewModel({ ...newModel, modelID: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          value={newModel.name}
          onChange={e => setNewModel({ ...newModel, name: e.target.value })}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Accuracy"
          value={newModel.accuracy}
          onChange={e => setNewModel({ ...newModel, accuracy: e.target.value })}
        />
        <button onClick={handleCreate}>Create Model</button>
      </div>
      <div>
        <h2>All Models</h2>
        {models.map(model => (
          <div key={model._id}>
            <p>Model ID: {model.modelID}</p>
            <p>Name: {model.name}</p>
            <p>Accuracy: {model.accuracy}</p>
            <button onClick={() => handleUpdate(model._id)}>Update</button>
            <button onClick={() => handleDelete(model._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
