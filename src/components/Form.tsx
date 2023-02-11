import React, { FormEvent, useState } from 'react'
import TodoInterface from '../TodoInterface'




interface Props {
    
    addTodo(todo: string): void;
}





export const Form: React.FC<Props> = ({ addTodo }) => {


    const [todo, setTodo] = useState<string>("")
    const [message, setMessage] = useState<string>("")


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        !todo ? setMessage("Write a task first") : setMessage("")




        addTodo(todo)
        setTodo("")


    }








    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder='Enter your task here'
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button type='submit'>Add</button>
                    <p>{message}</p>
                </div>

            </form>

        </div>
    )
}
