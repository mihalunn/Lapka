import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { describe, expect, it } from 'vitest'

import { routes } from './app/routes'

const tokenNames = [
  'color-brand-600',
  'color-brand-100',
  'color-accent-500',
  'color-canvas',
  'color-surface',
  'color-text-primary',
  'color-text-secondary',
  'color-border',
  'space-1',
  'space-2',
  'space-3',
  'space-4',
  'space-6',
  'space-8',
  'radius-sm',
  'radius-md',
  'radius-lg',
  'radius-full',
  'font-sans',
]

describe('Служебная страница токенов', () => {
  it('показывает подписи токенов из таблицы', () => {
    render(
      <RouterProvider
        router={createMemoryRouter(routes, { initialEntries: ['/ui-kit'] })}
      />,
    )

    for (const name of tokenNames) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('показывает демонстрационные подписи без данных семьи', () => {
    render(
      <RouterProvider
        router={createMemoryRouter(routes, { initialEntries: ['/ui-kit'] })}
      />,
    )

    expect(screen.getByText('Текст')).toBeInTheDocument()
    expect(screen.getByText('Поверхность')).toBeInTheDocument()
    expect(screen.getByText('Акцент')).toBeInTheDocument()
  })
})
