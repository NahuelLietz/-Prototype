import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import PathControl from './PathControl.jsx'

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <PathControl />
    </MemoryRouter>,
  )
}

describe('PathControl', () => {
  it('renders Home at "/"', () => {
    renderAt('/')

    expect(screen.getByRole('heading', { level: 1, name: 'Bienvenido a la página de inicio' })).toBeInTheDocument()
  })

  it('renders Register at "/register"', () => {
    renderAt('/register')

    expect(screen.getByRole('heading', { level: 2, name: 'Crear Cuenta' })).toBeInTheDocument()
  })

  it('renders nothing for an unknown route', () => {
    const { container } = renderAt('/unknown')

    expect(container).toBeEmptyDOMElement()
  })
})
