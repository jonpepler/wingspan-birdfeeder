import React from 'react'
import styled from 'styled-components'

import { DiceFace } from '../types/Dice'

interface Props {
  face: DiceFace
  onPress: () => void
  selectable: boolean
}

export const Dice = ({ face, onPress, selectable }: Props) => (
  <DiceButton onClick={onPress} selectable={selectable}>
    {face}
  </DiceButton>
)

const DiceButton = styled.button<{ selectable: boolean }>`
  background-color: beige;
  border: none;
  box-shadow: 0px 0px 20px 0px #898989;
  width: 100px;
  height: 100px;
  font-size: 32px;
  border-radius: 20px;
  margin: 12px;
  cursor: ${({ selectable }) => (selectable ? 'pointer' : 'default')};
`
