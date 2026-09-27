import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import writingData from '../../shared/data/writingData.js'
import { useProgress } from '../../entities/exercise/model/useProgress.js'
import { useLocalStorage } from '../../shared/lib/useLocalStorage.js'
import TopBar from '../../widgets/TopBar/TopBar.jsx'
import Icon from '../../shared/ui/Icon.jsx'
import { LEVEL_COLORS } from '../../shared/config/sections.js'
import './WritingDetailPage.css'

export default function WritingDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { markDone, progress } = useProgress()
  const item = writingData.find((w) => w.id === id)
  const index = writingData.findIndex((w) => w.id === id)
  const [drafts, setDrafts] = useLocalStorage('eg_writing_drafts', {})
  const [text, setText] = useState(drafts[id] || '')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setText(drafts[id] || '')
    setSaved(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (!item) return null

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0
  const enoughWords = wordCount >= item.minWords
  const next = writingData[index + 1]
  const alreadyDone = progress.writing[item.id]?.done

  const handleSave = () => {
    setDrafts((d) => ({ ...d, [id]: text }))
    markDone('writing', item.id, { words: wordCount })
    setSaved(true)
  }

  return (
    <div>
      <TopBar title={item.title} />
      <div className="page-content no-tabbar fade-in">
        <span className="badge" style={{ background: LEVEL_COLORS[item.level] }}>{item.level}</span>

        <div className="ios-card writing-prompt-card">
          <div className="writing-prompt-label">Задание</div>
          <p className="reading-text">{item.prompt}</p>
        </div>

        <textarea
          className="writing-textarea"
          placeholder="Начните печатать здесь…"
          value={text}
          onChange={(e) => { setText(e.target.value); setSaved(false) }}
        />

        <div className="writing-footer">
          <span className={enoughWords ? 'word-count ok' : 'word-count'}>
            {wordCount} / {item.minWords} слов {enoughWords && '✓'}
          </span>
          {alreadyDone && !saved && <span className="word-count ok">Ранее сохранено</span>}
        </div>

        <button className="ios-btn-primary" disabled={wordCount === 0} onClick={handleSave}>
          {saved ? 'Сохранено ✓' : 'Сохранить ответ'}
        </button>

        {saved && (
          <div className="result-block ios-card" style={{ marginTop: 14 }}>
            <div className="result-label" style={{ marginBottom: 14 }}>
              {enoughWords ? 'Отлично! Объём выполнен 🎉' : 'Сохранено. Попробуйте написать чуть больше в следующий раз.'}
            </div>
            {next ? (
              <button className="ios-btn-primary" onClick={() => navigate(`/writing/${next.id}`)}>
                Следующее задание <Icon name="chevronRight" size={16} color="#fff" />
              </button>
            ) : (
              <Link to="/writing" className="ios-btn-secondary" style={{ display: 'block', textAlign: 'center' }}>
                Ко всем заданиям
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
