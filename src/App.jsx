
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
    <main className=' flex flex-col justify-center py-5 px-10  bg-quaternary rounded-3xl ring-orange-600 ring-2 ring-inset items-center mx-32 my-11'>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map((todo, id) => (
          <TodoItem text={todo.text} key={id} />
        ))}
      </TodoList>

      <CreateTodoButtom />
    </main>

  )
}

export default App
