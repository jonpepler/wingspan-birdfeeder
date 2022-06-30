import React from 'react'
import styled from 'styled-components'
import { Birdfeeder } from './components/Birdfeeder'
import { DiceDisplay } from './components/DiceDisplay'
import { useBirdfeeder } from './hooks/useBirdfeeder'

function App() {
  const {
    inBirdfeeder,
    outsideBirdfeeder,
    removeDice,
    canReset,
    resetBirdfeeder
  } = useBirdfeeder()
  return (
    <Display>
      <Birdfeeder canReset={canReset} resetBirdfeeder={resetBirdfeeder}>
        <DiceDisplay dice={inBirdfeeder} onPress={removeDice} />
      </Birdfeeder>
      <OutsideBirdfeeder>
        <DiceDisplay dice={outsideBirdfeeder} />
      </OutsideBirdfeeder>
    </Display>
  )
}

const Display = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const OutsideBirdfeeder = styled.div`
  flex: 2;
  margin-top: 25px;
`
export default App
