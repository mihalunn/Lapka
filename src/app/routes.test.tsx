import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { describe, expect, it } from 'vitest'

import { routes } from './routes'

const sectionLinks = ['Обзор', 'Календарь', 'Семья'] as const

function renderAt(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] })

  render(<RouterProvider router={router} />)

  return router
}

describe('Маршруты и оболочка', () => {
  it('перенаправляет / на обзор', () => {
    renderAt('/')

    expect(screen.getByRole('heading', { name: 'Обзор' })).toBeInTheDocument()
  })

  it('показывает календарь, семью и petId', () => {
    renderAt('/calendar')
    expect(
      screen.getByRole('heading', { name: 'Календарь' }),
    ).toBeInTheDocument()
    cleanup()

    renderAt('/family')
    expect(screen.getByRole('heading', { name: 'Семья' })).toBeInTheDocument()
    cleanup()

    renderAt('/pets/pet-1')
    expect(screen.getByRole('heading', { name: 'Питомец' })).toBeInTheDocument()
    expect(screen.getByText('pet-1')).toBeInTheDocument()
  })

  it('отмечает только текущий пункт навигации', () => {
    renderAt('/calendar')

    const navigation = screen.getByRole('navigation')

    expect(
      within(navigation).getByRole('link', { name: 'Календарь' }),
    ).toHaveAttribute('aria-current', 'page')
    expect(
      within(navigation).getByRole('link', { name: 'Обзор' }),
    ).not.toHaveAttribute('aria-current')
    expect(
      within(navigation).getByRole('link', { name: 'Семья' }),
    ).not.toHaveAttribute('aria-current')
    expect(screen.getByRole('link', { name: 'Lapka' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('не отмечает пункты на странице питомца', () => {
    renderAt('/pets/pet-1')

    const navigation = screen.getByRole('navigation')

    for (const name of sectionLinks) {
      expect(
        within(navigation).getByRole('link', { name }),
      ).not.toHaveAttribute('aria-current')
    }
  })

  it('показывает неизвестный путь и возвращает на обзор', () => {
    renderAt('/missing')

    expect(
      screen.getByRole('heading', { name: 'Страница не найдена' }),
    ).toBeInTheDocument()

    const navigation = screen.getByRole('navigation')

    for (const name of sectionLinks) {
      expect(
        within(navigation).getByRole('link', { name }),
      ).not.toHaveAttribute('aria-current')
    }

    fireEvent.click(
      within(screen.getByRole('main')).getByRole('link', { name: 'Обзор' }),
    )

    expect(screen.getByRole('heading', { name: 'Обзор' })).toBeInTheDocument()
  })

  it('переходит между разделами без перезагрузки', () => {
    const router = renderAt('/overview')

    fireEvent.click(screen.getByRole('link', { name: 'Календарь' }))

    expect(router.state.location.pathname).toBe('/calendar')
    expect(
      screen.getByRole('heading', { name: 'Календарь' }),
    ).toBeInTheDocument()
  })

  it('держит служебную страницу вне навигации', () => {
    renderAt('/ui-kit')

    expect(screen.getByRole('heading', { name: 'Токены' })).toBeInTheDocument()
    expect(
      within(screen.getByRole('navigation')).getAllByRole('link'),
    ).toHaveLength(3)
    expect(
      within(screen.getByRole('navigation')).queryByRole('link', {
        name: 'Токены',
      }),
    ).not.toBeInTheDocument()
  })
})
