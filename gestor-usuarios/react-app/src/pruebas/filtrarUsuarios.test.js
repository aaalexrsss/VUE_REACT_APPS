import { describe, expect, it } from 'vitest'
import { filtrarUsuarios } from '../funciones/filtrarUsuarios'

describe('filtrarUsuarios', () => {
  it('busca nombres sin distinguir mayúsculas', () => {
    const usuarios = [
      { name: 'Leanne Graham' },
      { name: 'Ervin Howell' },
    ]

    expect(filtrarUsuarios(usuarios, 'LEANNE')).toEqual([usuarios[0]])
  })
})