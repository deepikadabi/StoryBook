import React from 'react'
import {addDecorator, addParameters} from '@storybook/react'
import Center from '../src/Components/Button/Center/Center'
import { ThemeProvider,theme, CSSReset } from '@chakra-ui/core'
import { withConsole } from '@storybook/addon-console'
import { withKnobs} from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import {withA11y} from '@storybook/addon-a11y'

addDecorator(story=> (
<ThemeProvider theme={theme}>
  <CSSReset />
  {story()}
</ThemeProvider>))

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

addParameters({
  viewport:{
    viewports: INITIAL_VIEWPORTS,
  },
})

addDecorator(withKnobs)
addDecorator(withA11y)
//addDecorator(story => <Center>{story()}</Center>)

/*
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
*/