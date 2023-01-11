import React, { useRef } from 'react'
import { InputProps } from '../model'
import "./styles.css"

const InputField: React.FC<InputProps> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur();
            }} >
            <input 
                ref={inputRef}
                type="input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Enter a task'
                className="input_box" />
            <button className="input_submit" type='submit'>Go</button>
        </form>
    )
}

export default InputField
