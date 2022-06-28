import { render } from 'test-utils'

import Index, { getStaticProps } from '../pages/index'

describe('Index', () => {
  it('renders', () => {
    const { getByText } = render(<Index />)
    expect(getByText('Hello, World')).toBeInTheDocument()
  })
  it('inits the lang via getStaticProps', async () => {
    const response = await getStaticProps({})
    expect(response).toHaveProperty(['props', 'messages'])
  })
})
