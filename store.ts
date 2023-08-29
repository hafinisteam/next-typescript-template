import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface State {}

export const useGameStore = create<State>()(devtools((set) => ({})))
