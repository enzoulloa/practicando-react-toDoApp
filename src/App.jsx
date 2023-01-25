
import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodoButtom from './components/CreateTodoButton'

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tormar el curso de intro a react', completed: false },
  { text: 'Llorar con la llorona', completed: false }
]

function App () {
  return (
    <main className=' flex flex-col py-5 px-10 h-screen rounded-3xl items-center justify-center min-w-[320px] border max-w-3xl mx-auto'>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map((todo, id) => (
          <TodoItem text={todo.text} key={id} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButtom />
    </main>

  )
}

export default App
