import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'

describe('App', () => {
  it('renders the hero heading and instructions', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: 'Get started' })).toBeInTheDocument()
    expect(screen.getByText('src/App.jsx')).toBeInTheDocument()
    expect(screen.getByText('HMR')).toBeInTheDocument()
  })

  it('renders the hero logos with accessible names only for the framework logos', () => {
    render(<App />)

    expect(screen.getByAltText('React logo')).toBeInTheDocument()
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument()
    expect(document.querySelector('img.base')).toHaveAttribute('alt', '')
  })

  it('starts the counter at zero', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: 'Count is 0' })).toBeInTheDocument()
  })

  it('increments the counter once per click', async () => {
    const user = userEvent.setup()
    render(<App />)

    const counter = screen.getByRole('button', { name: /^Count is/ })
    await user.click(counter)
    expect(counter).toHaveAccessibleName('Count is 1')

    await user.click(counter)
    await user.click(counter)
    expect(counter).toHaveAccessibleName('Count is 3')
  })

  it('keeps the counter as a non-submitting button', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: /^Count is/ })).toHaveAttribute('type', 'button')
  })

  it('renders the documentation section links', () => {
    render(<App />)

    const docs = document.querySelector('#docs')
    expect(within(docs).getByRole('heading', { level: 2, name: 'Documentation' })).toBeInTheDocument()

    const vite = within(docs).getByRole('link', { name: 'Explore Vite' })
    expect(vite).toHaveAttribute('href', 'https://vite.dev/')
    expect(vite).toHaveAttribute('target', '_blank')

    const react = within(docs).getByRole('link', { name: 'Learn more' })
    expect(react).toHaveAttribute('href', 'https://react.dev/')
    expect(react).toHaveAttribute('target', '_blank')
  })

  it('renders every social link with the expected destination', () => {
    render(<App />)

    const social = document.querySelector('#social')
    expect(within(social).getByRole('heading', { level: 2, name: 'Connect with us' })).toBeInTheDocument()

    const expected = {
      GitHub: 'https://github.com/vitejs/vite',
      Discord: 'https://chat.vite.dev/',
      'X.com': 'https://x.com/vite_js',
      Bluesky: 'https://bsky.app/profile/vite.dev',
    }

    const links = within(social).getAllByRole('link')
    expect(links).toHaveLength(Object.keys(expected).length)

    for (const [name, href] of Object.entries(expected)) {
      const link = within(social).getByRole('link', { name })
      expect(link).toHaveAttribute('href', href)
      expect(link).toHaveAttribute('target', '_blank')
    }
  })

  it('hides decorative icons from the accessibility tree', () => {
    render(<App />)

    const icons = document.querySelectorAll('svg')
    expect(icons.length).toBeGreaterThan(0)
    for (const icon of icons) {
      expect(icon).toHaveAttribute('aria-hidden', 'true')
      expect(icon).toHaveAttribute('role', 'presentation')
    }
  })

  it('renders the layout sections', () => {
    render(<App />)

    expect(document.querySelector('#center')).toBeInTheDocument()
    expect(document.querySelector('#next-steps')).toBeInTheDocument()
    expect(document.querySelector('#spacer')).toBeInTheDocument()
    expect(document.querySelectorAll('.ticks')).toHaveLength(2)
  })
})
