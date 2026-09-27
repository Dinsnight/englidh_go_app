import React from 'react'
import TopBar from '../../widgets/TopBar/TopBar.jsx'
import readingData from '../../shared/data/readingData.js'
import { useProgress } from '../../entities/exercise/model/useProgress.js'
import ListCard from '../../shared/ui/ListCard.jsx'

export default function ReadingListPage() {
  const { progress } = useProgress()
  return (
    <div>
      <TopBar title="Reading" />
      <div className="page-content fade-in">
      <p className="section-subtitle">10 текстов с вопросами на понимание</p>
      {readingData.map((item, i) => (
        <ListCard
          key={item.id}
          to={`/reading/${item.id}`}
          index={i + 1}
          title={item.title}
          level={item.level}
          meta={`${item.questions.length} вопр.`}
          done={progress.reading[item.id]?.done}
        />
      ))}
      </div>
    </div>
  )
}
