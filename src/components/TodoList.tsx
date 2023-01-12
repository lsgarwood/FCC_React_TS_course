import React from 'react'
import { TodoListProps } from '../model';
import SingleTodo from './SingleTodo';

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <SingleTodo 
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
        />
      ))}
    </div>
  )
}

export default TodoList;
