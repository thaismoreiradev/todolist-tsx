import React, { FormEvent, useState } from 'react'
import TodoInterface from '../TodoInterface'




interface Props {
    todos: TodoInterface[];
    setTodos(todo: TodoInterface[]): void;
}




export const Form: React.FC<Props> = ({ todos, setTodos }) => {


    const [todoDescription, setTodoDescription] = useState<string>("")
    const [message, setMessage] = useState<string>("")


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        !todoDescription ? setMessage("Write a task first") : setMessage("")
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder='Enter your task here'
                        value={todoDescription}
                        onChange={(e) => setTodoDescription(e.target.value)}
                    />
                    <button type='submit'>Add</button>
                    <p>{message}</p>
                </div>

            </form>

        </div>
    )
}
