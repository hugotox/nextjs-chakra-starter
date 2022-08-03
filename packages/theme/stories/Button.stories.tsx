import { Button, Text, VStack } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

const ButtonStory: Meta = {
  title: 'Z4 Chakra/Button',
}

const Template: Story = () => {
  return (
    <VStack alignItems="flex-start" spacing="12px">
      <Text fontWeight={600}>
        Variant: <code>primary</code> (default)
      </Text>
      <Button size="sm">Small button</Button>
      <div>
        <Button size="md">Medium button</Button> (default)
      </div>
      <Button size="lg">Large button</Button>
      <br />
      <Text fontWeight={600}>
        Variant: <code>secondary</code>
      </Text>
      <Button variant="secondary">Secondary button</Button>
      <br />
      <Text fontWeight={600}>
        Variant: <code>ghost</code>
      </Text>
      <Button variant="ghost">Ghost button</Button>
      <br />
      <Text fontWeight={600}>
        Variant: <code>outline</code>
      </Text>
      <Button variant="outline">Outline button</Button>
    </VStack>
  )
}

export const Default = Template.bind({})

export default ButtonStory
