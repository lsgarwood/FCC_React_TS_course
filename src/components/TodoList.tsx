import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo, TodoListProps } from '../model';
import SingleTodo from './SingleTodo';
import "./styles.css"

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
    <div className="container">
        <Droppable droppableId='TodosList'>
            {(provided) => (
                <div 
                    className='todos' 
                    ref={provided.innerRef}
                        {...provided.droppableProps}>
                    <span className="todos__heading">Active</span>
                    {todos.map((todo, index) => (
                        <SingleTodo
                            index={index}
                            todo={todo} 
                            todos={todos}  
                            key={todo.id} 
                            setTodos={setTodos}
                        />
                    ))}
                </div>
            )}
        </Droppable>
        <Droppable droppableId='TodosRemove'>
        {(provided) => (
            <div 
                className='todos-remove'
                ref={provided.innerRef}
                    {...provided.droppableProps}>
                <span className="todos__heading">Complete</span>
                {completedTodos.map((todo, index) => (
                    <SingleTodo 
                        index={index}
                        todo={todo} 
                        todos={completedTodos}  
                        key={todo.id} 
                        setTodos={setCompletedTodos}
                    />
                ))}
            </div>
        )}
        </Droppable>
    </div>
  )
}

export default TodoList;
