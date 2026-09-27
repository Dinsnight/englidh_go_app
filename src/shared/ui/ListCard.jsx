import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { LEVEL_COLORS } from '../config/sections.js'
import './ListCard.css'

export default function ListCard({ to, index, title, level, meta, done }) {
  const levelColor = LEVEL_COLORS[level] || 'var(--ios-gray)'
  return (
    <Link to={to} className="list-card">
      <div className="list-card-index" style={{ background: done ? 'var(--ios-green)' : 'var(--ios-gray6)' }}>
        {done ? <Icon name="check" size={16} color="#fff" strokeWidth={2.6} /> : <span>{index}</span>}
      </div>
      <div className="list-card-body">
        <div className="list-card-title">{title}</div>
        <div className="list-card-meta">
          <span className="list-card-level" style={{ color: levelColor, background: levelColor + '1A' }}>{level}</span>
          {meta && <span className="list-card-extra">{meta}</span>}
        </div>
      </div>
      <Icon name="chevronRight" size={18} color="var(--ios-gray2)" />
    </Link>
  )
}
