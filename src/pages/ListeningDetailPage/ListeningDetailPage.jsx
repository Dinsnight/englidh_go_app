import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import listeningData from '../../shared/data/listeningData.js'
import { useProgress } from '../../entities/exercise/model/useProgress.js'
import { useSpeech } from '../../shared/lib/useSpeech.js'
import TopBar from '../../widgets/TopBar/TopBar.jsx'
import Icon from '../../shared/ui/Icon.jsx'
import { LEVEL_COLORS } from '../../shared/config/sections.js'
import '../ReadingDetailPage/ReadingDetailPage.css'
import './ListeningDetailPage.css'

export default function ListeningDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { markDone } = useProgress()
  const { speak, stop, speaking, supported } = useSpeech()
  const item = listeningData.find((l) => l.id === id)
  const index = listeningData.findIndex((l) => l.id === id)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [revealed, setRevealed] = useState(false)

  if (!item) return null

  const allAnswered = item.questions.every((_, qi) => answers[qi] !== undefined)
  const score = item.questions.reduce((acc, q, qi) => acc + (answers[qi] === q.answer ? 1 : 0), 0)
  const next = listeningData[index + 1]

  const handleSubmit = () => {
    setSubmitted(true)
    markDone('listening', item.id, { score, total: item.questions.length })
  }

  return (
    <div>
      <TopBar title={item.title} />
      <div className="page-content no-tabbar fade-in">
        <span className="badge" style={{ background: LEVEL_COLORS[item.level] }}>{item.level}</span>

        <div className="ios-card listen-player">
          <button className="listen-play-btn" onClick={() => (speaking ? stop() : speak(item.script))}>
            <Icon name={speaking ? 'pause' : 'play'} size={26} color="#fff" />
          </button>
          <div>
            <div className="listen-player-title">{speaking ? 'Идёт озвучка…' : 'Нажмите, чтобы прослушать'}</div>
            <div className="listen-player-sub">{supported ? 'Аудио озвучивается устройством' : 'Озвучка не поддерживается — читайте текст ниже'}</div>
          </div>
        </div>

        <button className="ios-btn-secondary transcript-toggle" onClick={() => setRevealed((r) => !r)}>
          {revealed ? 'Скрыть транскрипт' : 'Показать транскрипт'}
        </button>
        {revealed && (
          <div className="ios-card reading-text-card">
            <p className="reading-text">{item.script}</p>
          </div>
        )}

        <h2 className="reading-q-title" style={{ marginTop: 18 }}>Вопросы</h2>
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
              <button className="ios-btn-primary" onClick={() => navigate(`/listening/${next.id}`)}>
                Следующее задание <Icon name="chevronRight" size={16} color="#fff" />
              </button>
            ) : (
              <Link to="/listening" className="ios-btn-secondary" style={{ display: 'block', textAlign: 'center' }}>
                Ко всем заданиям
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
