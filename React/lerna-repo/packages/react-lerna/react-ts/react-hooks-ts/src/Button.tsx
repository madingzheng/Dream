import React, { useEffect } from 'react'
interface IProps {
  handleIncrement: () => void
}
const Button: React.FC<IProps> = ({ handleIncrement, children }) => {
  useEffect(() => {
    console.log('handleIncrement')
  }, [handleIncrement])
  return <button onClick={handleIncrement}>{children}</button>
}
export default Button
