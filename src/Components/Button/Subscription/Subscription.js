import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

const Template =args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children:'Primary Args'
}
function Subscription(props) {
    const {variant = 'primary', children, ...rest} = props

    return(
        <>
            <Input />
            <Primary className={`button ${variant}`} {...rest}> {children}
</Primary> 
        </>
    )
}

export default Subscription

