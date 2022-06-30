import { DiceFace } from '../types/Dice'
import { Dice } from './Dice'

interface Props {
  dice: DiceFace[]
}

export const DiceDisplay = ({ dice }: Props) => (
  <>
    {dice.map((face, index) => (
      <Dice face={face} key={index} />
    ))}
  </>
)
