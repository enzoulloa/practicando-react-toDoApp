import React from 'react'

function useLocalStorage (itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }))

  const {
    loading,
    error,
    item
  } = state

  // Action creators
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error })
  const onSuccess = (parsedItem) => dispatch({ type: actionTypes.success, payload: parsedItem })
  const onSave = (newItem) => dispatch({ type: actionTypes.save, payload: newItem })

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = window.localStorage.getItem(itemName)
        let parsedItem

        if (!localStorageItem) {
          window.localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = []
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        onSuccess(parsedItem)
      } catch (error) {
        onError(error)
      }
    }, 3000)
  }, [])

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      window.localStorage.setItem(itemName, stringifiedItem)
      onSave(newItem)
    } catch (error) {
      onError(error)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

const initialState = ({ initialValue }) => ({
  loading: true,
  error: false,
  item: initialValue
})

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE'
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    sincronizedItem: true,
    loading: false,
    item: payload
  },
  [actionTypes.save]: {
    ...state,
    item: payload
  }
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state
}

export { useLocalStorage }
