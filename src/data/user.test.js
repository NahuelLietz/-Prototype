import { describe, expect, it } from 'vitest'
import { obtenerUsuarioPorId, users } from './user.js'

describe('users', () => {
  it('exposes users with unique ids and the expected shape', () => {
    expect(users).toHaveLength(3)
    expect(new Set(users.map((user) => user.id)).size).toBe(users.length)

    for (const user of users) {
      expect(user).toEqual({
        id: expect.any(Number),
        nombre: expect.any(String),
        email: expect.stringContaining('@'),
        rol: expect.stringMatching(/^(admin|user)$/),
        puntos: expect.any(Number),
        activo: expect.any(Boolean),
      })
    }
  })
})

describe('obtenerUsuarioPorId', () => {
  it('returns the matching user', () => {
    expect(obtenerUsuarioPorId(1)).toBe(users[0])
    expect(obtenerUsuarioPorId(3)).toMatchObject({ nombre: 'María Rodríguez', activo: false })
  })

  it('returns undefined for an unknown or loosely-typed id', () => {
    expect(obtenerUsuarioPorId(99)).toBeUndefined()
    expect(obtenerUsuarioPorId('1')).toBeUndefined()
    expect(obtenerUsuarioPorId()).toBeUndefined()
  })
})
