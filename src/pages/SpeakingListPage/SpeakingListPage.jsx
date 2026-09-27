import React from 'react'
import TopBar from '../../widgets/TopBar/TopBar.jsx'
import speakingData from '../../shared/data/speakingData.js'
import { useProgress } from '../../entities/exercise/model/useProgress.js'
import ListCard from '../../shared/ui/ListCard.jsx'

export default function SpeakingListPage() {
  const { progress } = useProgress()
  return (
    <div>
      <TopBar title="Speaking" />
      <div className="page-content fade-in">
      <p className="section-subtitle">10 тем — Part 1, Part 2, Part 3</p>
      {speakingData.map((item, i) => (
        <ListCard
          key={item.id}
          to={`/speaking/${item.id}`}
          index={i + 1}
          title={item.title}
          level={item.level}
          meta={item.part}
          done={progress.speaking[item.id]?.done}
        />
      ))}
      </div>
    </div>
  )
}
