import './App.css'
import { MessageProvider } from './context/MessageContext'
import Demo from './useContextDemo/Demo'

function App() {
  return (
    <MessageProvider>
      <Demo />
    </MessageProvider>
  )
}

export default App
