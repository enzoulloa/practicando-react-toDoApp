import { createPortal } from 'react-dom'

function Modal ({ children }) {
  return createPortal(
    <div className=' bg-black bg-opacity-50 flex justify-center items-center fixed -top-3 -bottom-3 -left-3 -right-3  '>{children}</div>
    , document.getElementById('modal'))
}

export default Modal
