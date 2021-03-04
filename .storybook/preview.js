import React from 'react'
import {addDecorator} from '@storybook/react'
import Center from '../src/Components/Button/Center/Center'
import { ThemeProvider,theme, CSSReset } from '@chakra-ui/core'


addDecorator(story=> (
<ThemeProvider theme={theme}>
  <CSSReset />
  {story()}
</ThemeProvider>))

//addDecorator(story => <Center>{story()}</Center>)

/*
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
*/