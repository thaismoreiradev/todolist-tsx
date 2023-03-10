import { useState } from 'react'
import { BsCheckLg, BsPencilSquare, BsTrashFill } from 'react-icons/bs'
import TodoInterface from '../TodoInterface'
import axios from 'axios'



interface Props {
    todo: TodoInterface,
    todos: TodoInterface[],
    setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>,
}



export const ListItem: React.FC<Props> = ({ todo, todos, setTodos }) => {



    const [editing, setEditing] = useState<boolean>(false)
    const [editedTodoText, setEditedTodoText] = useState<string>("")



    const updateData = async (editedTodo: TodoInterface) => {
        try {
            await axios.put(`http://localhost:8000/api/put/${todo.id}`, editedTodo)
        } catch (error) {
            console.error(error)
        }
    }







    const completeTodo = (id: number): void => {

        const currentTodo: any = todos.find((todo: TodoInterface) => todo.id === id);
        currentTodo.completed = !currentTodo.completed;

        const updatedTodos: TodoInterface[] = todos.map(
            (todo: TodoInterface): TodoInterface =>
                (todo.id === id ? currentTodo : todo))

        setTodos(updatedTodos)
        updateData({
            id: todo.id,
            text: todo.text,
            completed: currentTodo.completed
        })
    }






    const editTodo = (id: number): void => {

        const currentTodo: any = todos.find((todo: TodoInterface) => todo.id === id);
        currentTodo.text = editedTodoText;

        const updatedTodos: TodoInterface[] = todos.map(
            (todo: TodoInterface): TodoInterface =>
                (todo.id === id ? currentTodo : todo))

        setTodos(updatedTodos)
        updateData({
            id: todo.id,
            text: editedTodoText,
            completed: todo.completed
        })

    }





    const deleteTodo = async (id: number) => {
        const updatedTodos: TodoInterface[] = todos.filter(
            (todo: TodoInterface): any => todo.id !== id);
        setTodos(updatedTodos)
        await axios.delete(`http://localhost:8000/api/delete/${todo.id}`)
    }




    return (

        <div className='bg-rose-900 flex justify-between py-1 text-rose-50'>


            {editing === true ?

                <div className='flex items-center justify-between w-full'>

                    <input
                        className='rounded-sm p-1 text-lime-50 bg-rose-800 w-full break-all'
                        value={editedTodoText}
                        onChange={(e) => setEditedTodoText(e.target.value)}
                    ></input>

                    <div className='flex pl-2 gap-2'>

                        <label onClick={() => {
                            editTodo(todo.id)
                            setEditing(false)
                        }}>ok</label>

                        <p onClick={() => {
                            setEditing(false)
                            setEditedTodoText(todo.text)
                        }}>cancel</p>

                    </div>

                </div> :

                <h2 className={`${todo.completed ? "line-through text-rose-300 break-all" : "break-all"}`}>
                    {todo.text}</h2>
            }



            {editing === false ?

                <div className='flex items-center gap-2 ml-3 cursor-pointer'>

                    <BsCheckLg onClick={() => completeTodo(todo.id)} />
                    <BsPencilSquare
                        onClick={() => {
                            setEditedTodoText(todo.text)
                            setEditing(true)
                        }}
                    />
                    <button type='button' onClick={() => deleteTodo(todo.id)}><BsTrashFill /></button>

                </div> : null
            }

        </div>
    )
}
