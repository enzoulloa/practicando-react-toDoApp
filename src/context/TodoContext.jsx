import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

const TodoContext = createContext()

function TodoProvider (props) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])
  const [search, setSearch] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!search.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = search.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text
    })
    saveTodos(newTodos)
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    todos[todoIndex].completed = !todos[todoIndex].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchedTodos,
      search,
      setSearch,
      completeTodo,
      deleteTodo,
      addTodo,
      openModal,
      setOpenModal
    }}
    >{props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
