import { useState } from 'react'
import { getRandomDice } from '../util/getRandomDice'

export const useBirdfeeder = () => {
  const [inBirdfeeder, setInBirdfeeder] = useState(getRandomDice())
  const [outsideBirdfeeder, setOutsideBirdfeeder] = useState([])

  const resetBirdfeeder = () => setInBirdfeeder(getRandomDice())

  return { inBirdfeeder, outsideBirdfeeder, resetBirdfeeder }
}
