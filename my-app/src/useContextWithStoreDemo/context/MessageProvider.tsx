import { createContext, useContext, type ReactNode } from 'react'
import { useMessageStore } from '../store/useMessageStore'

interface MessageContextValue {
  message: string
  setMessage: (message: string) => void
}

const MessageContext = createContext<MessageContextValue | null>(null)

interface MessageProviderProps {
  children: ReactNode
}

export function MessageProvider({ children }: MessageProviderProps) {
  const { message, setMessage } = useMessageStore()

  const value: MessageContextValue = {
    message,
    setMessage,
  }

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  )
}

export function useMessage() {
  const context = useContext(MessageContext)
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider')
  }
  return context
}
