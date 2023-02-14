import React from 'react'
import TodoInterface from '../TodoInterface'

import { BsCheckLg, BsPencilSquare, BsTrashFill } from 'react-icons/bs'


interface Props {
  todos: TodoInterface[],
  completeTodo(id: number): void,
  deleteTodo(id: number): void,
}





export const List: React.FC<Props> = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <div className='bg-emerald-800 flex flex-col gap-[1px]'>

      {

        todos.map((todo: TodoInterface, index: number): any => (
          <div
            key={index}
            className='bg-emerald-900 flex justify-between p-1 text-lime-50'
          >
            <h2
              className={`${todo.completed ? "line-through" : ""}`}

            >{todo.text}</h2>

            <div className='flex items-center gap-1'>

              <BsCheckLg onClick={() => completeTodo(todo.id)} />
              <BsPencilSquare />
              <button type='button' onClick={() => deleteTodo(todo.id)}><BsTrashFill /></button>

            </div>

          </div>
        ))

      }


    </div>
  )
}
