import { DiceFace } from '../types/Dice'
import { Dice } from './Dice'

interface Props {
  dice: DiceFace[]
  onPress?: (index: number) => void
}

export const DiceDisplay = ({ dice, onPress }: Props) => (
  <>
    {dice.map((face, index) => (
      <Dice
        face={face}
        key={index}
        onPress={() => (onPress ? onPress(index) : null)}
      />
    ))}
  </>
)
