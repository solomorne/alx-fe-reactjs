import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App" style={appStyles}>
      {/* Rendering the TodoList component */}
      <TodoList />
    </div>
  );
}

const appStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f9f9f9',
  fontFamily: 'Arial, sans-serif'
};

export default App;