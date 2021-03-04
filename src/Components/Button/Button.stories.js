import React from 'react'
import Button from './Button'

export default{
    title: 'form/Button',
    component: Button
}
export const Primay = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>
export const Disabled = () => <Button variant='disabled'>Disabled</Button>

const Template =args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children:'Primary Args'
}