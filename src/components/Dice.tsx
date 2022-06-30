import React from 'react'

import { DiceFace } from '../types/Dice'

interface Props {
  face: DiceFace
}

export const Dice = ({ face }: Props) => <div>{face}</div>
