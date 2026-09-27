import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import readingData from '../../shared/data/readingData.js'
import { useProgress } from '../../entities/exercise/model/useProgress.js'
import TopBar from '../../widgets/TopBar/TopBar.jsx'
import Icon from '../../shared/ui/Icon.jsx'
import { LEVEL_COLORS } from '../../shared/config/sections.js'
import './ReadingDetailPage.css'

export default function ReadingDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { markDone } = useProgress()
  const item = readingData.find((r) => r.id === id)
  const index = readingData.findIndex((r) => r.id === id)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  if (!item) return null

  const allAnswered = item.questions.every((_, qi) => answers[qi] !== undefined)
  const score = item.questions.reduce((acc, q, qi) => acc + (answers[qi] === q.answer ? 1 : 0), 0)

  const next = readingData[index + 1]

  const handleSubmit = () => {
    setSubmitted(true)
    markDone('reading', item.id, { score, total: item.questions.length })
  }

  return (
    <div className="no-tabbar-page">
      <TopBar title={item.title} />
      <div className="page-content no-tabbar fade-in">
        <span className="badge" style={{ background: LEVEL_COLORS[item.level] }}>{item.level}</span>

        <div className="ios-card reading-text-card">
          <p className="reading-text">{item.text}</p>
        </div>

        <h2 className="reading-q-title">Вопросы</h2>
        {item.questions.map((q, qi) => (
          <div className="ios-card reading-question" key={qi}>
            <div className="reading-q-text">{qi + 1}. {q.q}</div>
            <div className="reading-options">
              {q.options.map((opt, oi) => {
                const isSelected = answers[qi] === oi
                const isCorrect = submitted && oi === q.answer
                const isWrongSelected = submitted && isSelected && oi !== q.answer
                return (
                  <button
                    key={oi}
                    className={
                      'reading-option' +
                      (isSelected && !submitted ? ' selected' : '') +
                      (isCorrect ? ' correct' : '') +
                      (isWrongSelected ? ' wrong' : '')
                    }
                    disabled={submitted}
                    onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                  >
                    <span>{opt}</span>
                    {isCorrect && <Icon name="check" size={16} color="#fff" strokeWidth={3} />}
                    {isWrongSelected && <Icon name="x" size={16} color="#fff" strokeWidth={3} />}
                  </button>
                )
              })}
            </div>
          </div>
        ))}

        {!submitted ? (
          <button className="ios-btn-primary" disabled={!allAnswered} onClick={handleSubmit}>
            Проверить ответы
          </button>
        ) : (
          <div className="result-block ios-card">
            <div className="result-score">{score}/{item.questions.length}</div>
            <div className="result-label">правильных ответов</div>
            {next ? (
              <button className="ios-btn-primary" onClick={() => navigate(`/reading/${next.id}`)}>
                Следующий текст <Icon name="chevronRight" size={16} color="#fff" />
              </button>
            ) : (
              <Link to="/reading" className="ios-btn-secondary" style={{ display: 'block', textAlign: 'center' }}>
                Ко всем текстам
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
