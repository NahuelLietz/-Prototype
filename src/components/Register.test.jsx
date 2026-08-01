import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Register, { Register as NamedRegister } from './Register.jsx'

const navigate = vi.fn()

vi.mock('react-router-dom', async (importOriginal) => ({
  ...(await importOriginal()),
  useNavigate: () => navigate,
}))

function renderRegister() {
  return render(<Register />, { wrapper: MemoryRouter })
}

afterEach(() => {
  navigate.mockClear()
  vi.restoreAllMocks()
})

describe('Register', () => {
  it('exposes the same component as a default and a named export', () => {
    expect(Register).toBe(NamedRegister)
  })

  it('renders empty email and password fields', () => {
    renderRegister()

    expect(screen.getByRole('heading', { level: 2, name: 'Crear Cuenta' })).toBeInTheDocument()

    const email = screen.getByPlaceholderText('Correo electrónico')
    expect(email).toHaveAttribute('type', 'email')
    expect(email).toHaveValue('')

    const password = screen.getByPlaceholderText('Contraseña')
    expect(password).toHaveAttribute('type', 'password')
    expect(password).toHaveValue('')
  })

  it('keeps both fields independent while typing', async () => {
    const user = userEvent.setup()
    renderRegister()

    await user.type(screen.getByPlaceholderText('Correo electrónico'), 'ana@example.com')
    await user.type(screen.getByPlaceholderText('Contraseña'), 'secreto')

    expect(screen.getByPlaceholderText('Correo electrónico')).toHaveValue('ana@example.com')
    expect(screen.getByPlaceholderText('Contraseña')).toHaveValue('secreto')
  })

  it('logs the submitted credentials and navigates home on submit', async () => {
    const user = userEvent.setup()
    const log = vi.spyOn(console, 'log').mockImplementation(() => {})
    renderRegister()

    await user.type(screen.getByPlaceholderText('Correo electrónico'), 'ana@example.com')
    await user.type(screen.getByPlaceholderText('Contraseña'), 'secreto')
    await user.click(screen.getByRole('button', { name: 'Registrarse' }))

    expect(log).toHaveBeenCalledWith('Usuario registrado:', {
      email: 'ana@example.com',
      password: 'secreto',
    })
    expect(navigate).toHaveBeenCalledWith('/')
  })

  it('submits without reloading the page', async () => {
    const user = userEvent.setup()
    vi.spyOn(console, 'log').mockImplementation(() => {})
    const { container } = renderRegister()

    const submit = vi.fn()
    container.querySelector('form').addEventListener('submit', submit)
    await user.click(screen.getByRole('button', { name: 'Registrarse' }))

    expect(submit).toHaveBeenCalledTimes(1)
    expect(submit.mock.calls[0][0].defaultPrevented).toBe(true)
  })

  it('goes back in history when "Volver atrás" is clicked', async () => {
    const user = userEvent.setup()
    renderRegister()

    await user.click(screen.getByRole('button', { name: 'Volver atrás' }))

    expect(navigate).toHaveBeenCalledWith(-1)
  })
})
