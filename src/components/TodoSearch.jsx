import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function TodoSearch () {
  const { search, setSearch } = useContext(TodoContext)

  const onSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <input value={search} onChange={onSearch} className=' text-primary m-5 shadow-stone-900 shadow-md font-normal text-lg rounded-sm h-10 w-80 outline-none caret-tertiary focus:ring-2 focus:ring-tertiary' placeholder='ToDo' />
  )
}
export default TodoSearch
