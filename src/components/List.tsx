import React from 'react'
import TodoInterface from '../TodoInterface'



interface Props {
  todos: TodoInterface[],
  completeTodo(id: number): void,
  deleteTodo(id: number): void,
}



export const List: React.FC<Props> = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <div>

      {
        todos.map((todo: TodoInterface, index: number): any => (
          <div key={index}>
            <h1 onClick={() => completeTodo(todo.id)}>{todo.text}</h1>

            {
              todo.completed && (<button type='button' onClick={() => deleteTodo(todo.id)}>Delete</button>)
            }

          </div>
        ))
      }


    </div>
  )
}
