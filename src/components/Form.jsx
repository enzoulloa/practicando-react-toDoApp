import { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

function Form () {
  const { addTodo, setOpenModal } = useContext(TodoContext)
  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onCancel = () => {
    setOpenModal(false)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(value)
    setOpenModal(false)
  }

  return (
    <form className=' px-4 py-9 bg-primary w-full max-w-xl h-2/4 flex justify-evenly items-center flex-col rounded-md' onSubmit={onSubmit}>
      <label className='font-medium text-3xl text-center mb-5' htmlFor='Todo'>Escribe tu nuevo ToDo</label>
      <textarea className=' bg-quaternary shadow-black shadow-sm rounded text-xl p-3 h-24 w-4/5 caret-tertiary  outline-none focus:outline-tertiary focus:outline-2 resize-none cursor-pointer focus:cursor-text' id='Todo' value={value} onChange={onChange} placeholder='Tarea...' />
      <div>
        <button className=' h-16 w-16 bg-red-600 rounded-full my-8 mx-5 cursor-pointer transition duration-500 hover:text-red-600 hover:bg-white' type='button' onClick={onCancel}>
          <div className='flex justify-center items-center '>
            <span class='material-symbols-outlined text-[40px]'>
              close
            </span>
          </div>
        </button>
        <button className='h-16 w-16 rounded-full my-8 mx-5 cursor-pointer bg-green-600 transition duration-500 hover:text-green-600 hover:bg-white' type='submit'>
          <div className=' flex justify-center items-center '>
            <span class='material-symbols-outlined text-[40px]'>
              add
            </span>
          </div>
        </button>
      </div>
    </form>
  )
}

export default Form
