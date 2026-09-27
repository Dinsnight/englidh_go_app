import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../../features/auth/ui/LoginForm.jsx'
import Icon from '../../shared/ui/Icon.jsx'
import './LoginPage.css'

export default function LoginPage() {
  const navigate = useNavigate()

  return (
    <div className="login-screen fade-in">
      <div className="login-hero">
        <div className="login-logo">
          <Icon name="book" size={34} color="#fff" />
        </div>
        <h1>EnglishGo</h1>
        <p>Reading · Listening · Writing · Speaking</p>
      </div>

      <LoginForm onSuccess={() => navigate('/', { replace: true })} />
    </div>
  )
}
