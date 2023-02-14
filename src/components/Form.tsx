import React, { FormEvent, useState } from 'react'



interface Props {
    addTodo(todo: string): void;
}





export const Form: React.FC<Props> = ({ addTodo }) => {


    const [todo, setTodo] = useState<string>("")
    const [message, setMessage] = useState<string>("")


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        !todo ? setMessage("You need to write a task") : setMessage("")

        addTodo(todo)
        setTodo("")
    }



    return (

        <div>
            <form
                onSubmit={handleSubmit}
                className='flex mb-1'
            >

                <input
                    type="text"
                    placeholder='Enter your task here'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className='w-full mr-2 rounded-sm p-1 text-emerald-900 bg-lime-50'
                />
                <button
                    type='submit'
                    className='bg-zinc-800 text-lime-50 rounded-sm py-1 px-2'
                >Add</button>
            </form>
            <p className='text-center text-red-300 text-xs pt-1'>{message}</p>



        </div>

    )
}
