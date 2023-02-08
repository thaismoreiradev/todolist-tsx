import { useState } from 'react'
import { Form } from './components/Form'
import { Footer } from './components/Footer'
import TodoInterface from './TodoInterface'

function App () {
  
 const [todos, setTodos] = useState<TodoInterface[]>()
  


  return (
    <div className='bg-red-200'>
      <h1>Todo list</h1>
      <div>
      <Form
      todos={todos}
      setTodos={setTodos}

      />
      </div>
        <Footer />
    </div>
  )
}

export default App
