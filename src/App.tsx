import { useState } from 'react'
import { Form } from './components/Form'
import { Footer } from './components/Footer'
import TodoInterface from './TodoInterface'
import { List } from './components/List'

function App() {

  const [todos, setTodos] = useState<TodoInterface[]>([
    {
      id: 1,
      text: "testing the code",
      completed: false
    }
  ])







  const addTodo = (todo: string): void => {



    const data: TodoInterface = {
      id: todos.length < 1 ? 1 : todos[todos.length - 1].id + 1,
      text: todo,
      completed: false,
    }



    setTodos((prevTodos: TodoInterface[]): TodoInterface[] => [...prevTodos, data])
    window.alert("todo added")
  }


  const completeTodo = (id: number): void => {

    const currentTodo: any = todos.find((todo: TodoInterface) => todo.id === id);
    currentTodo.completed = true;


    const updatedTodos: TodoInterface[] = todos.map(
      (todo: TodoInterface): TodoInterface =>
        (todo.id === id ? currentTodo : todo))

    setTodos(updatedTodos)
    window.alert("done!")
  }



  const deleteTodo = (id: number): void => {
    const updatedTodos: TodoInterface[] = todos.filter(
      (todo: TodoInterface): any => todo.id !== id
    );

    setTodos(updatedTodos)
    window.alert("deleted")
  }



  return (
    <div className='bg-red-200'>
      <h1>Todo list</h1>
      <div>
        <Form
          addTodo={addTodo}
        />

        <List
          todos={todos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />

      </div>
      <Footer />
    </div>
  )
}

export default App
