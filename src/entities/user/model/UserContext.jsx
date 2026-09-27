import React, { createContext, useContext } from 'react'
import { useLocalStorage } from '../../../shared/lib/useLocalStorage.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('eg_user', null)

  // Frontend-only "login": accepts any non-empty username/password.
  const login = (username) => {
    setUser({ username, loggedInAt: Date.now() })
    return true
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
