import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { TodoListProps } from '../model';
import SingleTodo from './SingleTodo';
import "./styles.css"

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (
    <div className="container">
        <Droppable droppableId="TodosList">
            {(provided, snapshot) => (
                <div 
                    className={`todos ${snapshot.isDraggingOver ? "dargactive" : ""}`} 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
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
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
        <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
            <div 
                className={`todos remove ${snapshot.isDraggingOver ? "dargcomplete" : ""}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
            >
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
                {provided.placeholder}
            </div>
        )}
        </Droppable>
    </div>
  )
}

export default TodoList;
