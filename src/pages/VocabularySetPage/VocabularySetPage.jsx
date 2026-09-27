import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import vocabularyData from '../../shared/data/vocabularyData.js'
import { useProgress } from '../../entities/exercise/model/useProgress.js'
import { useSpeech } from '../../shared/lib/useSpeech.js'
import TopBar from '../../widgets/TopBar/TopBar.jsx'
import Icon from '../../shared/ui/Icon.jsx'
import './VocabularySetPage.css'

export default function VocabularySetPage() {
  const { id } = useParams()
  const set = vocabularyData.find((v) => v.id === id)
  const { progress, toggleLearnedWord } = useProgress()
  const { speak } = useSpeech()
  const [current, setCurrent] = useState(0)
  const [flipped, setFlipped] = useState(false)

  if (!set) return null

  const word = set.words[current]
  const learnedWords = progress.vocabulary[set.id]?.learnedWords || []
  const isLearned = learnedWords.includes(word.word)

  const goTo = (i) => {
    const clamped = Math.max(0, Math.min(set.words.length - 1, i))
    setCurrent(clamped)
    setFlipped(false)
  }

  return (
    <div>
      <TopBar title={set.title} />
      <div className="page-content no-tabbar fade-in">
        <div className="vocab-progress-row">
          <span>{current + 1} / {set.words.length}</span>
          <span>{learnedWords.length} выучено</span>
        </div>

        <div className={'flashcard' + (flipped ? ' flipped' : '')} onClick={() => setFlipped((f) => !f)}>
          <div className="flashcard-inner">
            <div className="flashcard-face flashcard-front">
              <button
                className="flashcard-speak"
                onClick={(e) => { e.stopPropagation(); speak(word.word, { rate: 0.85 }) }}
              >
                <Icon name="play" size={16} color="#fff" />
              </button>
              <div className="flashcard-word">{word.word}</div>
              <div className="flashcard-hint">нажмите, чтобы перевернуть</div>
            </div>
            <div className="flashcard-face flashcard-back">
              <div className="flashcard-translation">{word.translation}</div>
              <div className="flashcard-example">"{word.example}"</div>
            </div>
          </div>
        </div>

        <button
          className={'ios-btn-secondary learned-btn' + (isLearned ? ' active' : '')}
          onClick={() => toggleLearnedWord(set.id, word.word)}
        >
          <Icon name="check" size={16} color={isLearned ? '#fff' : 'var(--ios-blue)'} />
          {isLearned ? 'Выучено' : 'Отметить как выученное'}
        </button>

        <div className="vocab-nav-row">
          <button className="vocab-nav-btn" disabled={current === 0} onClick={() => goTo(current - 1)}>
            <Icon name="chevronLeft" size={20} color={current === 0 ? 'var(--ios-gray2)' : 'var(--ios-blue)'} />
          </button>
          <div className="vocab-dots">
            {set.words.map((_, i) => (
              <span key={i} className={'vocab-dot' + (i === current ? ' active' : '') + (learnedWords.includes(set.words[i].word) ? ' learned' : '')} onClick={() => goTo(i)} />
            ))}
          </div>
          <button className="vocab-nav-btn" disabled={current === set.words.length - 1} onClick={() => goTo(current + 1)}>
            <Icon name="chevronRight" size={20} color={current === set.words.length - 1 ? 'var(--ios-gray2)' : 'var(--ios-blue)'} />
          </button>
        </div>
      </div>
    </div>
  )
}
