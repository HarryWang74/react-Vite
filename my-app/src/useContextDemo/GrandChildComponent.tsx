import { useMessage } from '../context/MessageContext'

function GrandChildComponent() {
  const { setMessage } = useMessage()

  const handleClick = () => {
    setMessage('Message updated from GrandChildComponent!')
  }

  return (
    <div>
      <h2>GrandChildComponent</h2>
      <button onClick={handleClick}>Update Message</button>
    </div>
  )
}

export default GrandChildComponent
