import { beforeEach, describe, expect, it, vi } from 'vitest'

const render = vi.fn()
const createRoot = vi.fn(() => ({ render, unmount: vi.fn() }))

vi.mock('react-dom/client', () => ({
  createRoot,
  default: { createRoot },
}))

describe('main', () => {
  beforeEach(() => {
    vi.resetModules()
    createRoot.mockClear()
    render.mockClear()
    document.body.innerHTML = '<div id="root"></div>'
  })

  it('mounts the app into the root element inside StrictMode', async () => {
    await import('./main.jsx')

    expect(createRoot).toHaveBeenCalledTimes(1)
    expect(createRoot).toHaveBeenCalledWith(document.getElementById('root'))

    expect(render).toHaveBeenCalledTimes(1)
    const tree = render.mock.calls[0][0]
    expect(tree.type).toBe(await import('react').then((react) => react.StrictMode))
    expect(tree.props.children.type.name).toBe('App')
  })
})
