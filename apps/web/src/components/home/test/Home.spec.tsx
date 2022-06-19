import { renderWithProviders } from 'utils'

import { Home } from '../Home'

describe('Home', () => {
  it('renders', () => {
    const { getByText } = renderWithProviders(<Home />)
    expect(getByText('Home.heading')).toBeInTheDocument()
  })
})
