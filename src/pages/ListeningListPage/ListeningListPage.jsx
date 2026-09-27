import React from 'react'
import TopBar from '../../widgets/TopBar/TopBar.jsx'
import listeningData from '../../shared/data/listeningData.js'
import { useProgress } from '../../entities/exercise/model/useProgress.js'
import ListCard from '../../shared/ui/ListCard.jsx'

export default function ListeningListPage() {
  const { progress } = useProgress()
  return (
    <div>
      <TopBar title="Listening" />
      <div className="page-content fade-in">
      <p className="section-subtitle">10 диалогов — слушай и отвечай на вопросы</p>
      {listeningData.map((item, i) => (
        <ListCard
          key={item.id}
          to={`/listening/${item.id}`}
          index={i + 1}
          title={item.title}
          level={item.level}
          meta={`${item.questions.length} вопр.`}
          done={progress.listening[item.id]?.done}
        />
      ))}
      </div>
    </div>
  )
}
