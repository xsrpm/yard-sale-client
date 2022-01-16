import { useEffect, useState } from 'react'

export function useFetch({ url, dependencies = [], initialState = [] }) {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setState(data)
      })
  }, dependencies)
  return state
}
