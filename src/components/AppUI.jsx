import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoCounter from './TodoCounter'
import TodoSearch from './TodoSearch'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import CreateTodoButtom from './CreateTodoButton'
import Modal from './Modal'
import Form from './Form'
import TodosError from './TodosError'
import TodosLoading from './TodosLoading'
import EmptyTodos from './EmptyTodos'

function AppUI () {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = useContext(TodoContext)
  return (

    <main className=' flex flex-col py-5 px-10 h-screen rounded-3xl items-center justify-center min-w-[320px] max-w-3xl mx-auto'>

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}

        {searchedTodos.map((todo, id) => (
          <TodoItem text={todo.text} key={id} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
        ))}
      </TodoList>

      <CreateTodoButtom setOpenModal={setOpenModal} openModal={openModal} />
      {openModal &&
        <Modal>
          <Form />
        </Modal>}
    </main>

  )
}
export default AppUI
