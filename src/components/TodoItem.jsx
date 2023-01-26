
function TodoItem (props) {
  return (
    <li className=' bg-quaternary flex justify-between items-center mt-6 rounded shadow-stone-900 shadow-md'>
      <button onClick={props.onComplete} className={` cursor-pointer flex justify-center items-center h-12 w-12 font-bold ${props.completed && 'text-green-600'}`}>
        <span class='material-symbols-outlined'>
          done
        </span>
      </button>
      <p className={`px-6 py-4 text-lg leading-6 font-normal  align-middle ${props.completed && 'line-through'}`}>{props.text}</p>
      <button onClick={props.onDelete} className=' cursor-pointer flex justify-center items-center h-12 w-12 font-bold  hover:text-tertiary rounded-full bg-primary mx-3'>
        <span class='material-symbols-outlined'>
          delete
        </span>
      </button>
    </li>
  )
}

export default TodoItem
