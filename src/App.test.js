import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import App from './App'

test('playing the game', async () => {
  render(<App />)

  expect(screen.getByText(/mi juego/i)).toBeInTheDocument()

  const playerNameInput = screen.getByLabelText(/name/i)

  fireEvent.change(playerNameInput, { target: { value: 'Jonathan' } })

  expect(playerNameInput.value).toBe('Jonathan')

  fireEvent.click(screen.getByText(/add player/i))

  expect(playerNameInput.value).toBe('')

  expect(screen.getByText(/jonathan/i)).toBeInTheDocument()
  expect(screen.getByText(/score: 0/i)).toBeInTheDocument()

  const awardPointsButton = screen.getByText(/randomly award points/i)

  expect(awardPointsButton).toBeInTheDocument()
  fireEvent.click(awardPointsButton)

  expect(screen.getByText(/score: 10/i)).toBeInTheDocument()
})
