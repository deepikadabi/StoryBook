import React from 'react'
import Input from './Input'

export default{
    title: 'form/Input',
    component: Input
}

export const Small = () => <Input size="small" placeholder="Small size" />
export const Medium = () => <Input size="medium" placeholder="Medium size" />
export const Large = () => <Input size="large" placeholder="Large size" />
export const Focused = () => <Input size="focused" placeholder="Focused" />
export const Animated = () => <Input size="animated" placeholder="Animated search input" />
export const Text = () => <Input size="textarea" placeholder="Some text ..."/>