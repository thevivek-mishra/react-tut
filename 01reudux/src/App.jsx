import { useState } from 'react'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'
import TotalCompleteItems from './components/TotalComleteItems'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
  )
}

export default App
