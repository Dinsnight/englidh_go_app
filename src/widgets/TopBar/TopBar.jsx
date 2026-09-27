import React from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../../shared/ui/Icon.jsx'
import './TopBar.css'

export default function TopBar({ title, onBack, right }) {
  const navigate = useNavigate()
  return (
    <header className="topbar">
      <div className="topbar-side">
        {onBack !== false && (
          <button className="topbar-back" onClick={() => (onBack ? onBack() : navigate(-1))} aria-label="Назад">
            <Icon name="chevronLeft" size={22} color="var(--ios-blue)" />
          </button>
        )}
      </div>
      <h1 className="topbar-title">{title}</h1>
      <div className="topbar-side right">{right}</div>
    </header>
  )
}
