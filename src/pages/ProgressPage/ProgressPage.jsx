import React from 'react'
import TopBar from '../../widgets/TopBar/TopBar.jsx'
import { SECTIONS } from '../../shared/config/sections.js'
import { useProgress } from '../../entities/exercise/model/useProgress.js'
import vocabularyData from '../../shared/data/vocabularyData.js'
import Icon from '../../shared/ui/Icon.jsx'
import './ProgressPage.css'

export default function ProgressPage() {
  const { stats, progress } = useProgress()
  const totalLearnedWords = vocabularyData.reduce(
    (acc, set) => acc + (progress.vocabulary[set.id]?.learnedWords?.length || 0),
    0
  )
  const totalWords = vocabularyData.reduce((acc, s) => acc + s.words.length, 0)

  return (
    <div>
      <TopBar title="Прогресс" onBack={false} />
      <div className="page-content fade-in">
      <p className="section-subtitle">Ваши результаты по всем разделам</p>

      {SECTIONS.map((s) => {
        const done = stats[s.key]
        const pct = Math.round((done / s.count) * 100)
        return (
          <div className="ios-card progress-row" key={s.key}>
            <div className="progress-row-icon" style={{ background: s.color }}>
              <Icon name={s.icon} size={18} color="#fff" />
            </div>
            <div style={{ flex: 1 }}>
              <div className="progress-row-top">
                <span className="progress-row-title">{s.title}</span>
                <span className="progress-row-count">{done}/{s.count}</span>
              </div>
              <div className="progress-bar-track" style={{ height: 6 }}>
                <div className="progress-bar-fill" style={{ width: `${pct}%`, background: s.color }} />
              </div>
            </div>
          </div>
        )
      })}

      <div className="ios-card progress-row">
        <div className="progress-row-icon" style={{ background: '#AF52DE' }}>
          <Icon name="cards" size={18} color="#fff" />
        </div>
        <div style={{ flex: 1 }}>
          <div className="progress-row-top">
            <span className="progress-row-title">Vocabulary</span>
            <span className="progress-row-count">{totalLearnedWords}/{totalWords}</span>
          </div>
          <div className="progress-bar-track" style={{ height: 6 }}>
            <div className="progress-bar-fill" style={{ width: `${(totalLearnedWords / totalWords) * 100}%`, background: '#AF52DE' }} />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
