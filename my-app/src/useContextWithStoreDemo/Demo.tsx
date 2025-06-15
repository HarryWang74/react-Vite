import { useMessage } from './context/MessageProvider'
import ChildComponent from './ChildComponent'
function Demo() {
  const { message } = useMessage()
  return (
    <>
      <h1>useContextWithStoreDemo</h1>
      <p>{message}</p>
      <ChildComponent />
    </>
  )
}

export default Demo
