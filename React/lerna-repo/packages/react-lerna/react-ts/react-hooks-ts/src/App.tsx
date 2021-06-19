import React, { useCallback, useRef, useState } from 'react'
import Button from './Button'

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(1)
  const ref = useRef<HTMLInputElement>(null)

  const handleIncrement = useCallback(() => {
    setCount(count + 1)
  }, [count])

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
