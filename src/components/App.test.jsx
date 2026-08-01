import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App.jsx'

describe('App', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/')
  })

  it('renders the home route by default', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: 'Bienvenido a la página de inicio' })).toBeInTheDocument()
  })

  it('navigates from home to the register form and back', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Ir a Registro' }))
    expect(screen.getByRole('heading', { level: 2, name: 'Crear Cuenta' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Volver atrás' }))
    expect(await screen.findByRole('heading', { level: 1, name: 'Bienvenido a la página de inicio' })).toBeInTheDocument()
  })

  it('returns home after submitting the register form', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Ir a Registro' }))
    await user.type(screen.getByPlaceholderText('Correo electrónico'), 'ana@example.com')
    await user.type(screen.getByPlaceholderText('Contraseña'), 'secreto')
    await user.click(screen.getByRole('button', { name: 'Registrarse' }))

    expect(screen.getByRole('heading', { level: 1, name: 'Bienvenido a la página de inicio' })).toBeInTheDocument()
  })
})
