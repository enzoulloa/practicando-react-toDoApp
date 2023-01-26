
function CreateTodoButtom (props) {
  const onClickButton = () => {
    props.setOpenModal(!props.openModal)
  }

  return (
    <button onClick={onClickButton} className=' fixed right-10 bottom-10 px-4 py-4 bg-tertiary shadow-stone-900 shadow-md  rounded-full my-5 cursor-pointer animation duration-300 hover:bg-secondary hover:text-tertiary flex justify-center items-center'>
      <span class='material-symbols-outlined text-6xl'>
        add
      </span>
    </button>

  )
}

export default CreateTodoButtom
