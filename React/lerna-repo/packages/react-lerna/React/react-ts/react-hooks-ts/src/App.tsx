import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import { useSingleton } from './hooks/hooks'
import { StoreState } from './redux/interface'
const App: React.FC = () => {
  const [count2, setCount2] = useState(1)
  const ref = useRef<HTMLInputElement>(null)
  const count = useSelector((state: StoreState) => state.value)

  const dispatch = useDispatch()
  const handleIncrement = () => {
    dispatch({ type: 'counter/incremented' })
  }
  useSingleton(() => {
    console.log('执行一次')
  })
  useEffect(() => {
    console.log('render')
  }, [])
  return (
    <div>
      {count}
      {count2}
      <Button handleIncrement={handleIncrement}>123</Button>
      <button
        onClick={() => {
          console.log('ref', ref.current?.focus())
        }}
      >
        count2
      </button>
      <input ref={ref} type="text" />
    </div>
  )
}

export default App
