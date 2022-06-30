import React from 'react'
import { DiceDisplay } from './components/DiceDisplay'
import { useBirdfeeder } from './hooks/useBirdfeeder'

function App() {
  const { inBirdfeeder, outsideBirdfeeder, resetBirdfeeder } = useBirdfeeder()
  return (
    <>
      <div>feeder</div>
      <DiceDisplay dice={inBirdfeeder} />
      <div>out of feeder</div>
      <DiceDisplay dice={outsideBirdfeeder} />
    </>
  )
}

export default App
