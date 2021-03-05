import React from 'react'
import Button from '../../Button/Button'
import Large from '../../Button/Input/Input'

export default{
    title: "form/Subscription",
};
const Template =args => <Button {...args} />


export const PrimarySubscription = () => (
    <>
        <Large />
        <Button variant='primary'>Primary</Button>

    </>
)