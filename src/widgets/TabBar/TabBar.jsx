import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../../shared/ui/Icon.jsx'
import './TabBar.css'

const TABS = [
  { to: '/', label: 'Главная', icon: 'home', end: true },
  { to: '/vocabulary', label: 'Слова', icon: 'cards' },
  { to: '/progress', label: 'Прогресс', icon: 'chart' },
  { to: '/profile', label: 'Профиль', icon: 'user' },
]

export default function TabBar() {
  return (
    <nav className="tabbar">
      {TABS.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end={tab.end}
          className={({ isActive }) => 'tab-item' + (isActive ? ' active' : '')}
        >
          {({ isActive }) => (
            <>
              <Icon name={tab.icon} size={24} color={isActive ? 'var(--ios-blue)' : 'var(--ios-gray)'} strokeWidth={isActive ? 2.3 : 2} />
              <span>{tab.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
