import React, { FormEvent, useState } from 'react'
import TodoInterface from '../TodoInterface'



interface Props {
    todos: TodoInterface[],
    setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>
}


export const Form: React.FC<Props> = ({ todos, setTodos }) => {


    const [todoText, setTodoText] = useState<string>("")
    

    const addTodo = (todo: string): void => {
        const data: TodoInterface = {
            id: todos.length < 1 ? 1 : todos[todos.length - 1].id + 1,
            text: todo,
            completed: false,
        }

        setTodos((prevTodos: TodoInterface[]): TodoInterface[] => [...prevTodos, data])        
    }



    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(todoText)
        setTodoText("")
    }




    return (

        <div>
            <form
                onSubmit={handleSubmit}
                className='flex my-2'

            >

                <input
                    required
                    type="text"
                    placeholder='Enter your task here'
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    className='w-full mr-2 rounded-sm p-1 text-emerald-900 bg-lime-50'
                />
                <button
                    type='submit'
                    className='bg-zinc-800 text-lime-50 rounded-sm py-1 px-2'
                >Add</button>
            </form>
            



        </div>

    )
}
