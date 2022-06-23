import { Meta, Story } from '@storybook/react'

import { Button } from '../'

const ComponentName: Meta = {
  component: Button,
  title: 'UI/Button',
}

const Template: Story = () => {
  return (
    <div>
      <Button>Chakra-UI is Awesome!</Button>
    </div>
  )
}

export const Simple = Template.bind({})

export default ComponentName
