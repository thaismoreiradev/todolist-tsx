import { useState } from 'react'
import { BsCheckLg, BsPencilSquare, BsTrashFill } from 'react-icons/bs'
import TodoInterface from '../TodoInterface'



interface Props {
    todo: TodoInterface,
    todos: TodoInterface[],
    setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>,
}




export const ListItem: React.FC<Props> = ({ todo, todos, setTodos }) => {


    const [editing, setEditing] = useState<boolean>(false)
    const [editedTodoText, setEditedTodoText] = useState<string>("")



    const completeTodo = (id: number): void => {

        const currentTodo: any = todos.find((todo: TodoInterface) => todo.id === id);
        currentTodo.completed = !currentTodo.completed;

        const updatedTodos: TodoInterface[] = todos.map(
            (todo: TodoInterface): TodoInterface =>
                (todo.id === id ? currentTodo : todo))

        setTodos(updatedTodos)
    }




    const editTodo = (id: number): void => {

        const currentTodo: any = todos.find((todo: TodoInterface) => todo.id === id);
        currentTodo.text = editedTodoText;

        const updatedTodos: TodoInterface[] = todos.map(
            (todo: TodoInterface): TodoInterface =>
                (todo.id === id ? currentTodo : todo))

        setTodos(updatedTodos)
    }





    const deleteTodo = (id: number): void => {
        const updatedTodos: TodoInterface[] = todos.filter(
            (todo: TodoInterface): any => todo.id !== id
        );
        setTodos(updatedTodos)
    }


    return (
        <div
            className='bg-emerald-900 flex justify-between p-1 text-lime-50'
        >


            {editing === true ?
                <>
                    <input
                        className='text-black'
                        value={editedTodoText}
                        onChange={(e) => setEditedTodoText(e.target.value)}
                    ></input>
                    <label onClick={() => {
                        editTodo(todo.id)
                        setEditing(false)
                    }}>ok</label>
                    <p onClick={() => {
                        setEditing(false)
                        setEditedTodoText(todo.text)
                    }}>x</p>
                </> :
                <h2
                    className={`${todo.completed ? "line-through" : ""}`}

                >{todo.text}</h2>
            }



            <div className='flex items-center gap-2 cursor-pointer'>

                <BsCheckLg onClick={() => completeTodo(todo.id)} />
                <BsPencilSquare
                    onClick={() => {

                        setEditedTodoText(todo.text)
                        setEditing(prev => !prev)

                    }}
                />
                <button type='button' onClick={() => deleteTodo(todo.id)}><BsTrashFill /></button>

            </div>

        </div>
    )
}
