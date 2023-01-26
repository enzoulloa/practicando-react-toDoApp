function TodosLoading () {
  return (
    <div className=' relative flex justify-center item-center mt-6 rounded shadow-stone-900 shadow-md '>
      <div className='w-12 h-auto flex justify-center items-center animate-spin  text-center align-middle '>
        <span class='material-symbols-outlined'>
          sync
        </span>
      </div>
      <p className=' px-6 py-4 text-lg font-normal align-middle '>Cargando TODOS...</p>

    </div>
  )
}

export default TodosLoading
