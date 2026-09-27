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

    const enteredUsername = username.trim()
    const enteredPassword = password

    if (!enteredUsername || !enteredPassword) {
      setError('Введите логин и пароль')
      return
    }

    // Проверка логина и пароля
    if (enteredUsername !== 'Badriddin' || enteredPassword !== '12345') {
      setError('Неверный логин или пароль')
      return
    }

    // Успешный вход
    login(enteredUsername)

    onSuccess?.()
  }

  return (
    <form className="login-form ios-card" onSubmit={handleSubmit}>
      <div className="input-row">
        <Icon
          name="user"
          size={18}
          color="var(--ios-gray)"
        />

        <input
          placeholder="Логин"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
            setError('')
          }}
          autoComplete="username"
        />
      </div>

      <div className="input-row">
        <Icon
          name="lock"
          size={18}
          color="var(--ios-gray)"
        />

        <input
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setError('')
          }}
          autoComplete="current-password"
        />
      </div>

      {error && (
        <div className="login-error">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="ios-btn-primary"
        style={{ marginTop: 8 }}
      >
        Войти
      </button>
    </form>
  )
}

