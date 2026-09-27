import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AuthProvider, useAuth } from '../entities/user/model/UserContext.jsx'
import TabBar from '../widgets/TabBar/TabBar.jsx'

import LoginPage from '../pages/LoginPage/LoginPage.jsx'
import HomePage from '../pages/HomePage/HomePage.jsx'
import ReadingListPage from '../pages/ReadingListPage/ReadingListPage.jsx'
import ReadingDetailPage from '../pages/ReadingDetailPage/ReadingDetailPage.jsx'
import ListeningListPage from '../pages/ListeningListPage/ListeningListPage.jsx'
import ListeningDetailPage from '../pages/ListeningDetailPage/ListeningDetailPage.jsx'
import WritingListPage from '../pages/WritingListPage/WritingListPage.jsx'
import WritingDetailPage from '../pages/WritingDetailPage/WritingDetailPage.jsx'
import SpeakingListPage from '../pages/SpeakingListPage/SpeakingListPage.jsx'
import SpeakingDetailPage from '../pages/SpeakingDetailPage/SpeakingDetailPage.jsx'
import VocabularyPage from '../pages/VocabularyPage/VocabularyPage.jsx'
import VocabularySetPage from '../pages/VocabularySetPage/VocabularySetPage.jsx'
import ProgressPage from '../pages/ProgressPage/ProgressPage.jsx'
import ProfilePage from '../pages/ProfilePage/ProfilePage.jsx'

const TABBAR_ROUTES = ['/', '/reading', '/listening', '/writing', '/speaking', '/vocabulary', '/progress', '/profile']

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return children
}

function AppShell() {
  const { isAuthenticated } = useAuth()
  const location = useLocation()
  const showTabBar = isAuthenticated && TABBAR_ROUTES.includes(location.pathname)

  return (
    <div className="app-shell">
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />} />

        <Route path="/" element={<ProtectedRoute><div className="page-content home-content"><HomePage /></div></ProtectedRoute>} />

        <Route path="/reading" element={<ProtectedRoute><ReadingListPage /></ProtectedRoute>} />
        <Route path="/reading/:id" element={<ProtectedRoute><ReadingDetailPage /></ProtectedRoute>} />

        <Route path="/listening" element={<ProtectedRoute><ListeningListPage /></ProtectedRoute>} />
        <Route path="/listening/:id" element={<ProtectedRoute><ListeningDetailPage /></ProtectedRoute>} />

        <Route path="/writing" element={<ProtectedRoute><WritingListPage /></ProtectedRoute>} />
        <Route path="/writing/:id" element={<ProtectedRoute><WritingDetailPage /></ProtectedRoute>} />

        <Route path="/speaking" element={<ProtectedRoute><SpeakingListPage /></ProtectedRoute>} />
        <Route path="/speaking/:id" element={<ProtectedRoute><SpeakingDetailPage /></ProtectedRoute>} />

        <Route path="/vocabulary" element={<ProtectedRoute><VocabularyPage /></ProtectedRoute>} />
        <Route path="/vocabulary/:id" element={<ProtectedRoute><VocabularySetPage /></ProtectedRoute>} />

        <Route path="/progress" element={<ProtectedRoute><ProgressPage /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

        <Route path="*" element={<Navigate to={isAuthenticated ? '/' : '/login'} replace />} />
      </Routes>
      {showTabBar && <TabBar />}
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  )
}
