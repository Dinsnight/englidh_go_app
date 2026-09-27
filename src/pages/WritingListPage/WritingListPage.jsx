import React from 'react'
import TopBar from '../../widgets/TopBar/TopBar.jsx'
import writingData from '../../shared/data/writingData.js'
import { useProgress } from '../../entities/exercise/model/useProgress.js'
import ListCard from '../../shared/ui/ListCard.jsx'

export default function WritingListPage() {
  const { progress } = useProgress()
  return (
    <div>
      <TopBar title="Writing" />
      <div className="page-content fade-in">
      <p className="section-subtitle">10 заданий на письмо</p>
      {writingData.map((item, i) => (
        <ListCard
          key={item.id}
          to={`/writing/${item.id}`}
          index={i + 1}
          title={item.title}
          level={item.level}
          meta={`от ${item.minWords} слов`}
          done={progress.writing[item.id]?.done}
        />
      ))}
      </div>
    </div>
  )
}
