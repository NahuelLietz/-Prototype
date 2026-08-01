import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import Home from './Home.jsx'

const navigate = vi.fn()

vi.mock('react-router-dom', async (importOriginal) => ({
  ...(await importOriginal()),
  useNavigate: () => navigate,
}))

function renderHome() {
  return render(<Home />, { wrapper: MemoryRouter })
}

describe('Home', () => {
  it('renders the welcome heading and the register call to action', () => {
    renderHome()

    expect(screen.getByRole('heading', { level: 1, name: 'Bienvenido a la página de inicio' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Ir a Registro' })).toBeInTheDocument()
  })

  it('navigates to /register when the button is clicked', async () => {
    const user = userEvent.setup()
    navigate.mockClear()
    renderHome()

    await user.click(screen.getByRole('button', { name: 'Ir a Registro' }))

    expect(navigate).toHaveBeenCalledTimes(1)
    expect(navigate).toHaveBeenCalledWith('/register')
  })

  it('does not navigate before any interaction', () => {
    navigate.mockClear()
    renderHome()

    expect(navigate).not.toHaveBeenCalled()
  })
})
