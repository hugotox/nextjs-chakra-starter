import { render } from 'test-utils'

import { Button } from './'

describe('ui/Button', () => {
  it('renders', () => {
    const { getByText } = render(<Button>Boop</Button>)
    expect(getByText('Boop')).toBeInTheDocument()
  })
})
