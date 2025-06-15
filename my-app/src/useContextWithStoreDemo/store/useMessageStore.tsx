import { create } from 'zustand'

interface MessageState {
  message: string
  setMessage: (message: string) => void
}

export const useMessageStore = create<MessageState>((set) => ({
  message: 'Initial message from Zustand store',
  setMessage: (message: string) => set({ message: message }),
}))
