import { useState } from 'react'
import { Form } from './components/Form'
import { List } from './components/List'
import { Footer } from './components/Footer'
import TodoInterface from './TodoInterface'


function App() {

  const [todos, setTodos] = useState<TodoInterface[]>([])


  return (


    <div className='bg-emerald-800 w-screen h-screen flex flex-col items-center justify-between overflow-auto'>

      <main className='bg-emerald-900 flex flex-col items-center w-[90vw] max-w-2xl min-h-[2/3] rounded-md p-5 gap-2 m-4 sm:mt-12'>

        <h1 className='font-rozha text-4xl text-lime-50'>TODO LIST</h1>
        
        <div className='w-full max-w-md'>
          <Form
            todos={todos}
            setTodos={setTodos}
          />

          <List
            todos={todos}
            setTodos={setTodos}                   
          />

        </div>

      </main>

      <Footer />
      
    </div>
  )
}

export default App
