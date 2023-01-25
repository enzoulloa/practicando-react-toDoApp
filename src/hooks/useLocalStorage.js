import { useState, useEffect } from 'react'

function useLocalStorage (itemName, initialValue) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
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
        setItem(parsedItem)
        setLoading(false)
      } catch (err) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }, 1000)
  })

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      window.localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }
  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage }
