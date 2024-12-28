import 'react';
import ReactFlow from 'react-flow-renderer';
import { useSelector } from 'react-redux';

const Diagram = () => {
  const nodes = useSelector((state) => state.diagram.nodes); // Get nodes from Redux state

  // Map nodes to React Flow elements
  const elements = nodes.map((node) => ({
    id: node.id,
    data: {
      label: `${node.label}: ${node.description}`, // Display both node name and description
    },
    position: { x: Math.random() * 250, y: Math.random() * 250 }, // Random position for each node
  }));

  return (
    <div className="diagram">
      <ReactFlow elements={elements} />
    </div>
  );
};

export default Diagram;

