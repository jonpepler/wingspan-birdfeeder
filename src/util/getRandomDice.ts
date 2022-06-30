import { Dice } from '../types/Dice'

export const getRandomDice = () =>
  Array.from({ length: 5 }).map(
    () => Dice[Math.floor(Math.random() * Dice.length)]
  )
