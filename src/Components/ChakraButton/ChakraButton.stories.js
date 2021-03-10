import React from 'react'
import {Button} from '@chakra-ui/core'
import { action, actions} from '@storybook/addon-actions'
import { text, boolean} from '@storybook/addon-knobs'
export default {
    title: 'Chakra/Button',
    component: Button,
    argTypes:{
        variantColor: {control : 'text'},
        children: {control: 'text'},
        onClick: {action: 'clicked'},
        onMouseOver: {action: 'mouse'}
    }
}

const Template = args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
    variantColor: 'green',
    children: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
    variantColor: 'red',
    children: 'Danger'
}

export const Primary = Template.bind({})
Primary.args = {
    variantColor: 'blue',
    children: 'Primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
    variantColor: 'purple',
    children: 'Secondary'
}


export const Log = () => (
    <Button variantColor='blue' onClick={() => console.log('Button Clicked')}>Log</Button>
)

export const knobs = () => (
    <Button variantColor='purple' disabled = {boolean('Disabled', false)}>
        {text('Label', 'Button Label')}
    </Button>
)