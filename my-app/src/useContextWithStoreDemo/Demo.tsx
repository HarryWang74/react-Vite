import { useMessage } from './context/MessageProvider'

function Demo() {
  const { message } = useMessage()
  return (
    <>
      <h1>useContextWithStoreDemo</h1>
      <p>{message}</p>
    </>
  )
}

export default Demo
