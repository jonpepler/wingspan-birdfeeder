import React from 'react'
import { DiceDisplay } from './components/DiceDisplay'
import { useBirdfeeder } from './hooks/useBirdfeeder'

function App() {
  const { inBirdfeeder, outsideBirdfeeder, removeDice } = useBirdfeeder()
  return (
    <>
      <div>feeder</div>
      <DiceDisplay dice={inBirdfeeder} onPress={removeDice} />
      <div>out of feeder</div>
      <DiceDisplay dice={outsideBirdfeeder} />
    </>
  )
}

export default App
