import React, { FormEvent, useState } from 'react'

export const Form: React.FC = () => {


    const [todo, setTodo] = useState<string>("")


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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
                </div>

            </form>

        </div>
    )
}
