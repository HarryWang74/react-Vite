import './App.css'
// import { MessageProvider } from './useContextDemo/MessageContext'
// import Demo from './useContextDemo/Demo'

import { MessageProvider } from './useContextWithStoreDemo/context/MessageProvider'
import Demo from './useContextWithStoreDemo/Demo'

function App() {
  return (
    // <h1>Hello</h1>

    // useContext with store demo
    <MessageProvider>
      <Demo />
    </MessageProvider>

    // common way to use context
    /*     
      <MessageProvider>
        <Demo />
      </MessageProvider> 
    */
  )
}

export default App
