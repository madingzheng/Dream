import { useRef } from 'react'

export const useSingleton = (callback: () => void) => {
  const ref = useRef(false)
  if (ref.current) return
  callback()
  ref.current = true
}
