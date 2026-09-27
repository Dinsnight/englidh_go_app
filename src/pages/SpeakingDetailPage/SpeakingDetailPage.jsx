import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import speakingData from '../../shared/data/speakingData.js'
import { useProgress } from '../../entities/exercise/model/useProgress.js'
import { useRecorder } from '../../shared/lib/useRecorder.js'
import TopBar from '../../widgets/TopBar/TopBar.jsx'
import Icon from '../../shared/ui/Icon.jsx'
import { LEVEL_COLORS } from '../../shared/config/sections.js'
import './SpeakingDetailPage.css'

const STAGE = { PREP: 'prep', SPEAK: 'speak', DONE: 'done' }

export default function SpeakingDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { markDone } = useProgress()
  const { recording, audioUrl, error, start, stop, reset } = useRecorder()
  const item = speakingData.find((s) => s.id === id)
  const index = speakingData.findIndex((s) => s.id === id)

  const [stage, setStage] = useState(STAGE.PREP)
  const [secondsLeft, setSecondsLeft] = useState(item?.prepSeconds || 15)
  const timerRef = useRef(null)

  useEffect(() => {
    setStage(STAGE.PREP)
    setSecondsLeft(item?.prepSeconds || 15)
    reset()
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    clearInterval(timerRef.current)
    if (stage === STAGE.PREP || stage === STAGE.SPEAK) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((s) => {
          if (s <= 1) {
            clearInterval(timerRef.current)
            if (stage === STAGE.PREP) {
              setStage(STAGE.SPEAK)
              setSecondsLeft(item.speakSeconds)
              start()
            } else if (stage === STAGE.SPEAK) {
              stop()
              setStage(STAGE.DONE)
              markDone('speaking', item.id, {})
            }
            return 0
          }
          return s - 1
        })
      }, 1000)
    }
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage])

  if (!item) return null
  const next = speakingData[index + 1]

  const skipToSpeak = () => {
    clearInterval(timerRef.current)
    setStage(STAGE.SPEAK)
    setSecondsLeft(item.speakSeconds)
    start()
  }

  const finishNow = () => {
    clearInterval(timerRef.current)
    stop()
    setStage(STAGE.DONE)
    markDone('speaking', item.id, {})
  }

  return (
    <div>
      <TopBar title={item.title} />
      <div className="page-content no-tabbar fade-in">
        <div className="speak-tags">
          <span className="badge" style={{ background: 'var(--ios-purple)' }}>{item.part}</span>
          <span className="badge" style={{ background: LEVEL_COLORS[item.level] }}>{item.level}</span>
        </div>

        <div className="ios-card writing-prompt-card" style={{ marginTop: 14 }}>
          <div className="writing-prompt-label">Тема для ответа</div>
          <p className="reading-text">{item.prompt}</p>
        </div>

        {error && <div className="login-error" style={{ marginBottom: 10 }}>{error}</div>}

        {stage === STAGE.PREP && (
          <div className="ios-card speak-stage-card">
            <div className="speak-timer">{secondsLeft}s</div>
            <div className="speak-stage-label">Время на подготовку</div>
            <button className="ios-btn-secondary" onClick={skipToSpeak}>Начать говорить сейчас</button>
          </div>
        )}

        {stage === STAGE.SPEAK && (
          <div className="ios-card speak-stage-card recording">
            <div className="speak-rec-dot" />
            <div className="speak-timer">{secondsLeft}s</div>
            <div className="speak-stage-label">Идёт запись — говорите!</div>
            <button className="ios-btn-primary" style={{ background: 'var(--ios-red)' }} onClick={finishNow}>
              Завершить запись
            </button>
          </div>
        )}

        {stage === STAGE.DONE && (
          <div className="ios-card speak-stage-card">
            <Icon name="check" size={30} color="var(--ios-green)" />
            <div className="speak-stage-label" style={{ marginTop: 6 }}>Запись готова</div>
            {audioUrl && <audio controls src={audioUrl} className="speak-audio" />}
            <button className="ios-btn-secondary" onClick={() => { reset(); setStage(STAGE.PREP); setSecondsLeft(item.prepSeconds) }}>
              Записать заново
            </button>
            {next ? (
              <button className="ios-btn-primary" onClick={() => navigate(`/speaking/${next.id}`)}>
                Следующая тема <Icon name="chevronRight" size={16} color="#fff" />
              </button>
            ) : (
              <Link to="/speaking" className="ios-btn-secondary" style={{ display: 'block', textAlign: 'center' }}>
                Ко всем темам
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
