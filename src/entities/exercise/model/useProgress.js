import { useLocalStorage } from '../../../shared/lib/useLocalStorage.js'

const EMPTY = { reading: {}, listening: {}, writing: {}, speaking: {}, vocabulary: {} }

export function useProgress() {
  const [progress, setProgress] = useLocalStorage('eg_progress', EMPTY)

  const markDone = (module, id, data = {}) => {
    setProgress((prev) => ({
      ...prev,
      [module]: { ...prev[module], [id]: { done: true, ...data } },
    }))
  }

  const toggleLearnedWord = (setId, word) => {
    setProgress((prev) => {
      const current = prev.vocabulary[setId]?.learnedWords || []
      const has = current.includes(word)
      const next = has ? current.filter((w) => w !== word) : [...current, word]
      return {
        ...prev,
        vocabulary: { ...prev.vocabulary, [setId]: { learnedWords: next } },
      }
    })
  }

  const stats = {
    reading: Object.values(progress.reading || {}).filter((x) => x.done).length,
    listening: Object.values(progress.listening || {}).filter((x) => x.done).length,
    writing: Object.values(progress.writing || {}).filter((x) => x.done).length,
    speaking: Object.values(progress.speaking || {}).filter((x) => x.done).length,
  }

  return { progress, markDone, toggleLearnedWord, stats }
}
