import React from 'react'
import { TodoListProps } from '../model';

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <li>{todo.todo}</li>
      ))}
    </div>
  )
}

export default TodoList;
