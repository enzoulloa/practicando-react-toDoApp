
import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodoButtom from './components/CreateTodoButton'

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tormar el curso de intro a react', completed: false },
  { text: 'Llorar con la llorona', completed: false }
]

function App () {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map((todo, id) => (
          <TodoItem text={todo.text} key={id} />
        ))}
      </TodoList>

      <CreateTodoButtom />
    </>
  )
}

export default App
