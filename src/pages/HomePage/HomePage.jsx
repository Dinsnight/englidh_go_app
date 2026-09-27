import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../entities/user/model/UserContext.jsx'
import { useProgress } from '../../entities/exercise/model/useProgress.js'
import { SECTIONS } from '../../shared/config/sections.js'
import Icon from '../../shared/ui/Icon.jsx'
import './HomePage.css'

export default function HomePage() {
  const { user } = useAuth()
  const { stats } = useProgress()
  const totalDone = stats.reading + stats.listening + stats.writing + stats.speaking
  const totalAll = 40

  return (
    <div className="fade-in home-page-content">
      <p className="home-greeting">Привет, {user?.username || 'друг'} 👋</p>
      <h1 className="section-title" style={{ marginTop: 0 }}>Начнём заниматься?</h1>

      <div className="ios-card home-progress-card">
        <div className="home-progress-top">
          <div>
            <div className="home-progress-num">{totalDone}/{totalAll}</div>
            <div className="home-progress-label">упражнений пройдено</div>
          </div>
          <div className="home-progress-flame">
            <Icon name="flame" size={26} color="#FF9500" />
          </div>
        </div>
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${(totalDone / totalAll) * 100}%` }} />
        </div>
      </div>

      <div className="home-grid">
        {SECTIONS.map((s) => (
          <Link key={s.key} to={s.path} className="home-tile" style={{ '--tile-color': s.color }}>
            <div className="home-tile-icon" style={{ background: s.color }}>
              <Icon name={s.icon} size={22} color="#fff" />
            </div>
            <div className="home-tile-title">{s.title}</div>
            <div className="home-tile-sub">{s.subtitle}</div>
            <div className="home-tile-count">{stats[s.key]}/{s.count} готово</div>
          </Link>
        ))}
      </div>

      <Link to="/vocabulary" className="ios-card home-vocab-banner">
        <div className="home-vocab-icon"><Icon name="cards" size={22} color="#fff" /></div>
        <div style={{ flex: 1 }}>
          <div className="home-vocab-title">Vocabulary</div>
          <div className="home-vocab-sub">5 наборов слов · флеш-карточки</div>
        </div>
        <Icon name="chevronRight" size={18} color="var(--ios-gray)" />
      </Link>
    </div>
  )
}
