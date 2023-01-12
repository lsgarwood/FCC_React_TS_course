import React from 'react'
import { SingleTodoProps } from '../model'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {  MdDone } from "react-icons/md";
import "./styles.css";

const SingleTodo: React.FC<SingleTodoProps> = ({ todo, todos, setTodos }) => {
  return (
    <form action="" className="todos_single">
        <span className="todos_single--text"> {todo.todo} </span>
        <div>
            <span className="icon">
                <AiFillEdit/>
            </span>
            <span className="icon">
                <AiFillDelete/>
            </span>
            <span className="icon">
                <MdDone/>
            </span>
        </div>
    </form>
  )
}

export default SingleTodo
