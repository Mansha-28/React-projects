import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    setTodos([...todos, todo])
    setTodo("");
  }

  const handleUpdateText = (e) => {
    console.log("hello")
  };

  return (
    <div className='text-center'>
      <h1 className='p-5 text-2xl font-bold'>Todo</h1>

      <input className='border-2 p-2 border-black rounded' type="text"  value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button className='bg-green-500 p-2 mx-4 rounded' onClick={handleSubmit}>Add Todo</button>

      <div className='bg-gray-500'>
        <p className='text-xl font-bold my-10'>Todo List</p>

        {
          todos.map((todo, index) => (
            <div key={index} className='flex flex-row text-center'>
              <li>{todo}</li>
              <button className='bg-blue-500 mx-10 px-2 rounded' onClick={() => handleUpdateText}>Edit</button>
              <button className='bg-red-500 mx-10 px-2 rounded' onClick={() => setTodos(todos.filter((t) => t !== todo))}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
