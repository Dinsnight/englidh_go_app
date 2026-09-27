import React, { useState } from 'react'
import { useAuth } from '../../../entities/user/model/UserContext.jsx'
import Icon from '../../../shared/ui/Icon.jsx'

export default function LoginForm({ onSuccess }) {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username.trim() || !password.trim()) {
      setError('Введите логин и пароль')
      return
    }
    login(username.trim())
    onSuccess?.()
  }

  return (
    <form className="login-form ios-card" onSubmit={handleSubmit}>
      <div className="input-row">
        <Icon name="user" size={18} color="var(--ios-gray)" />
        <input
          placeholder="Логин"
          value={username}
          onChange={(e) => { setUsername(e.target.value); setError('') }}
          autoComplete="username"
        />
      </div>
      <div className="input-row">
        <Icon name="lock" size={18} color="var(--ios-gray)" />
        <input
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError('') }}
          autoComplete="current-password"
        />
      </div>
      {error && <div className="login-error">{error}</div>}
      <button type="submit" className="ios-btn-primary" style={{ marginTop: 8 }}>
        Войти
      </button>
      <p className="login-hint">Демо-вход: подойдёт любой логин и пароль</p>
    </form>
  )
}
