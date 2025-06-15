import { useMessage } from '../context/MessageContext'
import ChildComponent from './ChildComponent'

function Demo() {
  const { message } = useMessage()
  return (
    <>
      <h1>Demo</h1>
      <p>Message from context: {message}</p>
      <ChildComponent />
    </>
  )
}

export default Demo
