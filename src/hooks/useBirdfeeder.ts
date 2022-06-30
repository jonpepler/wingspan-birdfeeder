import { useEffect, useState } from 'react'
import { DiceFace } from '../types/Dice'
import { getRandomDice } from '../util/getRandomDice'

export const useBirdfeeder = () => {
  const [inBirdfeeder, setInBirdfeeder] = useState(getRandomDice())
  const [outsideBirdfeeder, setOutsideBirdfeeder] = useState<DiceFace[]>([])
  const [canReset, setCanReset] = useState(false)

  useEffect(() => {
    if (inBirdfeeder.length === 0 || new Set(inBirdfeeder).size === 1)
      setCanReset(true)
    else setCanReset(false)
  }, [inBirdfeeder])

  const resetBirdfeeder = () => {
    setInBirdfeeder(getRandomDice())
    setOutsideBirdfeeder([])
  }
  const removeDice = (index: number) => {
    console.log('removing ' + index)
    const inB = inBirdfeeder.slice(0)
    const outB = inB.splice(index, 1)
    console.log(inB, outB)
    setInBirdfeeder(inB)
    setOutsideBirdfeeder((b) => [...b, ...outB])
  }

  return {
    inBirdfeeder,
    outsideBirdfeeder,
    removeDice,
    canReset,
    resetBirdfeeder
  }
}
