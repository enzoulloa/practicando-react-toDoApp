import { TodoProvider } from './context/TodoContext'
import AppUI from './components/AppUI'

// const initialValue = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tormar el curso de intro a react', completed: false },
//   { text: 'Llorar con la llorona', completed: false }
// ]

function App () {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
