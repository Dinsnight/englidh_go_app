import React from 'react'
import TopBar from '../../widgets/TopBar/TopBar.jsx'
import { Link } from 'react-router-dom'
import vocabularyData from '../../shared/data/vocabularyData.js'
import { useProgress } from '../../entities/exercise/model/useProgress.js'
import Icon from '../../shared/ui/Icon.jsx'
import { LEVEL_COLORS } from '../../shared/config/sections.js'
import './VocabularyPage.css'

export default function VocabularyPage() {
  const { progress } = useProgress()
  return (
    <div>
      <TopBar title="Vocabulary" />
      <div className="page-content fade-in">
      <p className="section-subtitle">5 наборов по 10 слов — флеш-карточки</p>
      {vocabularyData.map((set) => {
        const learned = progress.vocabulary[set.id]?.learnedWords?.length || 0
        return (
          <Link key={set.id} to={`/vocabulary/${set.id}`} className="ios-card vocab-set-card">
            <div className="vocab-set-icon"><Icon name="cards" size={20} color="#fff" /></div>
            <div style={{ flex: 1 }}>
              <div className="vocab-set-title">{set.title}</div>
              <div className="vocab-set-meta">
                <span className="badge" style={{ background: LEVEL_COLORS[set.level] }}>{set.level}</span>
                <span className="vocab-set-progress">{learned}/{set.words.length} выучено</span>
              </div>
            </div>
            <Icon name="chevronRight" size={18} color="var(--ios-gray2)" />
          </Link>
        )
      })}
      </div>
    </div>
  )
}
