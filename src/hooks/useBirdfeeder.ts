import { useState } from 'react'
import { DiceFace } from '../types/Dice'
import { getRandomDice } from '../util/getRandomDice'

export const useBirdfeeder = () => {
  const [inBirdfeeder, setInBirdfeeder] = useState(getRandomDice())
  const [outsideBirdfeeder, setOutsideBirdfeeder] = useState<DiceFace[]>([])

  const resetBirdfeeder = () => setInBirdfeeder(getRandomDice())
  const removeDice = (index: number) => {
    console.log('removing ' + index)
    const inB = inBirdfeeder.slice(0)
    const outB = inB.splice(index, 1)
    console.log(inB, outB)
    setInBirdfeeder(inB)
    setOutsideBirdfeeder((b) => [...b, ...outB])
  }

  return { inBirdfeeder, outsideBirdfeeder, removeDice, resetBirdfeeder }
}
