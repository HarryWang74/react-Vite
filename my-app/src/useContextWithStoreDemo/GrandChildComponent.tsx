import { useMessage } from './context/MessageProvider'

function GrandChildComponent() {
  const { setMessage } = useMessage()

  const handleClick = () => {
    setMessage('Message updated from GrandChildComponent with Zustand!')
  }

  return (
    <div>
      <h2>GrandChildComponent</h2>
      <button onClick={handleClick}>Update Message</button>
    </div>
  )
}

export default GrandChildComponent
