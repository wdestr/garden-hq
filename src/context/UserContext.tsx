import { createContext, useContext, useState, useCallback } from 'react'
import type { UserProfile } from '@/types/garden'
import { mockUser as defaultUser } from '@/data/mock'
import { zipToZone } from '@/data/planting-windows'

interface UserContextValue {
  user: UserProfile
  updateUser: (updates: Partial<UserProfile>) => void
  updateZip: (zip: string) => void
}

const UserContext = createContext<UserContextValue | null>(null)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile>({ ...defaultUser })

  const updateUser = useCallback((updates: Partial<UserProfile>) => {
    setUser(prev => ({ ...prev, ...updates }))
  }, [])

  const updateZip = useCallback((zip: string) => {
    const zone = zipToZone(zip)
    setUser(prev => ({
      ...prev,
      zipCode: zip,
      ...(zone ? { zone } : {}),
    }))
  }, [])

  return (
    <UserContext.Provider value={{ user, updateUser, updateZip }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used within UserProvider')
  return ctx
}
