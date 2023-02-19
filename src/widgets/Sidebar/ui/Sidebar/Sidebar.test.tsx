import { Sidebar } from 'widgets/Sidebar'
import { fireEvent, screen } from '@testing-library/react'
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender'

describe('Sidebar', () => {
  test('render sidebar', () => {
    ComponentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle sidebar', () => {
    ComponentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
