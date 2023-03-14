import React from 'react'
import TodoInterface from '../TodoInterface'
import { ListItem } from './ListItem'



interface Props {
  todos: TodoInterface[],
  setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>,
}


export const List: React.FC<Props> = ({ todos, setTodos }) => {



  return (

    <div className='bg-rose-800 flex flex-col gap-[1px]'>

      {
        todos.map((todo: TodoInterface): any => (
          <ListItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))

      }

    </div>
  )
}
