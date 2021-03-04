import React from 'react'
import {Button} from '@chakra-ui/core'
export default{
    title: 'Chakra/Button',
    component: Button
}

export const Success = ()=> <Button variantColor= 'green'>Success</Button>
export const Danger = ()=> <Button variantColor= 'red'>Success</Button>
export const Primary = ()=> <Button variantColor= 'blue'>Success</Button>
export const Secondary = ()=> <Button variantColor= 'purple'>Success</Button>

