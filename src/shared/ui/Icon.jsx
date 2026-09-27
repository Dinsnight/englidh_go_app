import React from 'react'

// Minimal, dependency-free line-icon set (SF Symbols-inspired) so the app
// needs no external icon package.
const paths = {
  home: 'M3 11.5 12 4l9 7.5 M5 10v9.5a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10',
  book: 'M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13ZM20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z',
  headphones: 'M4 13a8 8 0 0 1 16 0v4.5 M4 13v4a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H4Zm16 0v4a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3Z',
  pencil: 'm4 20 1-4.5L15.5 5A2.1 2.1 0 0 1 18.5 8L8 18.5 4 20Zm10-13.5 3 3',
  mic: 'M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Zm-7-3a7 7 0 0 0 14 0 M12 19v3',
  cards: 'M4 7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Zm3-2 8.5-2.5 2 6.9',
  chart: 'M4 20V10 M10 20V4 M16 20v-7 M4 20h16',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0',
  play: 'M6 4.5v15l13-7.5-13-7.5Z',
  pause: 'M6 5h4v14H6zM14 5h4v14h-4z',
  check: 'm4 12 5 5L20 6',
  chevronRight: 'm9 5 7 7-7 7',
  chevronLeft: 'm15 5-7 7 7 7',
  x: 'm5 5 14 14M19 5 5 19',
  clock: 'M12 7v5l3 3 M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z',
  logout: 'M9 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3 M16 17l5-5-5-5 M21 12H9',
  flame: 'M12 22c4-1 6-3.5 6-7 0-2.5-1.5-4-2.5-5.5C15 8 15 6 13.5 4c.3 2-1 3-2.3 4.5C9.5 10.3 8 12 8 15a4 4 0 0 0 4 4c-1-1-1.5-2-1.5-3.2C10.5 14 12 13 12 11c1 1 2 2.5 2 4.5 0 2-1 3.5-2 4.5Z',
  mail: 'M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 0 8 7 8-7',
  lock: 'M6 11V8a6 6 0 1 1 12 0v3 M5 11h14v9H5z',
  star: 'm12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z',
}

export default function Icon({ name, size = 22, color = 'currentColor', strokeWidth = 2, style }) {
  const d = paths[name]
  if (!d) return null
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
      <path d={d} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
