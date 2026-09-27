import { useState, useRef, useCallback } from 'react'

// Wraps MediaRecorder so speaking exercises can record and play back the
// user's own voice, entirely in the browser (nothing is uploaded anywhere).
export function useRecorder() {
  const [recording, setRecording] = useState(false)
  const [audioUrl, setAudioUrl] = useState(null)
  const [error, setError] = useState(null)
  const mediaRecorderRef = useRef(null)
  const chunksRef = useRef([])
  const streamRef = useRef(null)

  const start = useCallback(async () => {
    setError(null)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      const mr = new MediaRecorder(stream)
      chunksRef.current = []
      mr.ondataavailable = (e) => chunksRef.current.push(e.data)
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        setAudioUrl(URL.createObjectURL(blob))
        stream.getTracks().forEach((t) => t.stop())
      }
      mediaRecorderRef.current = mr
      mr.start()
      setRecording(true)
    } catch (err) {
      setError('Нет доступа к микрофону. Разрешите доступ в настройках браузера.')
    }
  }, [])

  const stop = useCallback(() => {
    mediaRecorderRef.current?.stop()
    setRecording(false)
  }, [])

  const reset = useCallback(() => {
    setAudioUrl(null)
  }, [])

  return { recording, audioUrl, error, start, stop, reset }
}
