import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNode } from './redux/diagramSlice'; // Action to add a node
import Sidebar from './components/Sidebars';
import Diagram from './components/Diagram';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const [nodeName, setNodeName] = useState('');
  const [nodeDescription, setNodeDescription] = useState('');

  // Handle form submission
  const handleAddNode = (e) => {
    e.preventDefault();
    if (nodeName && nodeDescription) {
      const newNode = {
        id: Date.now().toString(), // Unique ID for each node
        label: nodeName,
        description: nodeDescription,
      };

      // Dispatch the action to add the node to the Redux store
      dispatch(addNode(newNode));

      // Clear the input fields after adding the node
      setNodeName('');
      setNodeDescription('');
    } else {
      alert("Please provide both node name and description!");
    }
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="input-container">
        <h3>Add a Node</h3>
        <form onSubmit={handleAddNode}>
          <input
            type="text"
            value={nodeName}
            onChange={(e) => setNodeName(e.target.value)}
            placeholder="Node Name"
            required
          />
          <input
            type="text"
            value={nodeDescription}
            onChange={(e) => setNodeDescription(e.target.value)}
            placeholder="Node Description"
            required
          />
          <button type="submit">Add Node</button>
        </form>
      </div>
      <Diagram />
    </div>
  );
};

export default App;
