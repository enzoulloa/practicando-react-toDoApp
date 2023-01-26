import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function TodoCounter () {
  const { totalTodos, completedTodos } = useContext(TodoContext)
  return (
    <h2 className=' font-semibold text-3xl my-8'> Has complentado {completedTodos} de {totalTodos} ToDos</h2>
  )
}

export default TodoCounter
