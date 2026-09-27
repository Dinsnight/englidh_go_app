import { useState, useRef, useCallback, useEffect } from 'react'

// Wraps the browser's SpeechSynthesis API so listening exercises can be
// played without needing any audio files.
export function useSpeech() {
  const [speaking, setSpeaking] = useState(false)
  const [supported, setSupported] = useState(true)
  const utterRef = useRef(null)

  useEffect(() => {
    setSupported(typeof window !== 'undefined' && 'speechSynthesis' in window)
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const speak = useCallback((text, { rate = 0.95 } = {}) => {
    if (!supported) return
    window.speechSynthesis.cancel()
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = 'en-US'
    utter.rate = rate
    utter.onstart = () => setSpeaking(true)
    utter.onend = () => setSpeaking(false)
    utter.onerror = () => setSpeaking(false)
    utterRef.current = utter
    window.speechSynthesis.speak(utter)
  }, [supported])

  const stop = useCallback(() => {
    if (!supported) return
    window.speechSynthesis.cancel()
    setSpeaking(false)
  }, [supported])

  return { speak, stop, speaking, supported }
}
