import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nodes: [], // Array to hold all nodes
};

const diagramSlice = createSlice({
  name: 'diagram',
  initialState,
  reducers: {
    addNode: (state, action) => {
      state.nodes.push(action.payload); // Add new node to the array
    },
    removeNode: (state, action) => {
      state.nodes = state.nodes.filter((node) => node.id !== action.payload); // Remove node by ID
    },
  },
});

export const { addNode, removeNode } = diagramSlice.actions;

export default diagramSlice.reducer;
