import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Master Jest' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Master Jest')).toBeInTheDocument();
  });

  test('toggles a todo completion status', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    // Initially not line-through
    expect(todoItem.parentElement).not.toHaveStyle('text-decoration: line-through');
    
    // Click to toggle
    fireEvent.click(todoItem);
    expect(todoItem.parentElement).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');
    const deleteButton = screen.getAllByText('Delete')[0]; // First delete button

    fireEvent.click(deleteButton);

    expect(todoText).not.toBeInTheDocument();
  });
});