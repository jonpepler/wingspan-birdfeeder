import { PropsWithChildren } from 'react'
import styled from 'styled-components'

interface Props {
  canReset: boolean
  resetBirdfeeder: () => void
}

export const Birdfeeder = ({
  children,
  canReset,
  resetBirdfeeder
}: PropsWithChildren<Props>) => (
  <Container>
    {children}
    {canReset ? (
      <ResetButton onClick={resetBirdfeeder}>
        <Icon>↻</Icon>
      </ResetButton>
    ) : (
      ''
    )}
  </Container>
)

const Container = styled.div`
  position: relative;
  background-color: #ad8e8e;
  flex: 5;
`
const ResetButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: calc(50% - 40px);
`
const Icon = styled.div`
  width: 80px;
  height: 80px;
  font-size: 64px;
`
