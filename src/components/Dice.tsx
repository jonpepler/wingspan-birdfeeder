import React from 'react'

import { DiceFace } from '../types/Dice'

interface Props {
  face: DiceFace
  onPress: () => void
}

export const Dice = ({ face, onPress }: Props) => (
  <button onClick={onPress}>{face}</button>
)
