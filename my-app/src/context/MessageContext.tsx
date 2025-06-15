import { createContext, useState, ReactNode, useContext } from 'react'

const MessageContext = createContext<{
  message: string
  setMessage: (message: string) => void
} | null>(null)

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string>('Hello, World!')
  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  )
}

export const useMessage = () => {
  const context = useContext(MessageContext)
  if (!context)
    throw new Error('useMessage must be used within a MessageProvider')
  return context
}
