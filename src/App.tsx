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
    currentTodo.completed = !currentTodo.completed;

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
    window.alert("deleted")
  }



  return (


    <div className='bg-emerald-800 w-screen h-screen flex flex-col items-center justify-between'>

      <main className='bg-emerald-900 flex flex-col items-center w-[90vw] max-w-2xl h-2/3 rounded-md p-5 gap-3 m-4'>

        <h1 className='font-rozha text-4xl text-lime-50'>TODO LIST</h1>
        
        <div className='w-full max-w-md'>
          <Form
            addTodo={addTodo}
          />

          <List
            todos={todos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
