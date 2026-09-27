import React from 'react'
import TopBar from '../../widgets/TopBar/TopBar.jsx'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../entities/user/model/UserContext.jsx'
import { useProgress } from '../../entities/exercise/model/useProgress.js'
import Icon from '../../shared/ui/Icon.jsx'
import './ProfilePage.css'

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const { stats } = useProgress()
  const navigate = useNavigate()
  const total = stats.reading + stats.listening + stats.writing + stats.speaking

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div>
      <TopBar title="Профиль" onBack={false} />
      <div className="page-content fade-in">

      <div className="ios-card profile-card">
        <div className="profile-avatar">{(user?.username || '?').slice(0, 1).toUpperCase()}</div>
        <div className="profile-name">{user?.username}</div>
        <div className="profile-sub">Изучаю английский язык</div>
      </div>

      <div className="ios-card profile-stats">
        <div className="profile-stat">
          <div className="profile-stat-num">{total}</div>
          <div className="profile-stat-label">упражнений</div>
        </div>
        <div className="profile-divider" />
        <div className="profile-stat">
          <div className="profile-stat-num">4</div>
          <div className="profile-stat-label">навыка</div>
        </div>
        <div className="profile-divider" />
        <div className="profile-stat">
          <div className="profile-stat-num">5</div>
          <div className="profile-stat-label">словар. набора</div>
        </div>
      </div>

      <button className="ios-card profile-logout" onClick={handleLogout}>
        <Icon name="logout" size={18} color="var(--ios-red)" />
        <span>Выйти из аккаунта</span>
      </button>
      </div>
    </div>
  )
}
