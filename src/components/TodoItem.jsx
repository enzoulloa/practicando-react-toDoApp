
function TodoItem (props) {
  return (
    <li className=' bg-quaternary  flex justify-between items-center mt-6 rounded shadow-stone-900 shadow-md'>
      <div className={` cursor-pointer flex justify-center items-center h-12 w-12 font-bold text-2xl ${props.completed && 'text-green-600'}`}>
        <span class='material-symbols-outlined'>
          done
        </span>
      </div>
      <p className={`px-6 py-4 text-lg leading-6 font-normal  align-middle ${props.completed && 'line-through'}`}>{props.text}</p>
      <div className=' cursor-pointer flex justify-center items-center h-12 w-12 font-bold text-2xl hover:text-tertiary rounded-full bg-primary mx-3'>
        <span class='material-symbols-outlined'>
          delete
        </span>
      </div>
    </li>
  )
}

export default TodoItem
