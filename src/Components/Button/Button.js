import React from 'react'
import styled from 'styled-components'

const CommonButton = styled.button `
  border: none;
  color: white;
  padding: 5px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  font-weight:bold;
  border-radius:10px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  `

const PrimaryButton = styled(CommonButton)
`
background-color: white;
color: black;
border: 2px solid #555555;
&:hover{
    background-color: #555555;
    color: white;
}
`

const SecondaryButton = styled(CommonButton)
`
    background-color: white; 
    color:#008CBA; 
    border: 2px solid #008CBA;
    &:hover{
        background-color: #008CBA;
        color: white;
    }`


const DangerButton = styled(CommonButton)
`
       background-color: white; 
    color: #f44336; 
    border: 2px solid #f44336;

    &:hover{
        background-color: #f44336;
        color: white;
    }`


const DisabledButton = styled(CommonButton)
`
        background-color: white;
    color: gray;
    border: 2px solid #e7e7e7;
    &:hover{
        background-color: #e7e7e7;
    }`

const SuccessButton = styled(CommonButton)
`
       background-color: white; 
        color: #4CAF50; 
        border: 2px solid #4CAF50;
    &:hover{
        background-color: #4CAF50;
        color: white;
    }`

export default function Button(props) {
    const { variant = 'primary', children  } = props
    const theme = {
        'primary' : PrimaryButton,
        'secondary' : SecondaryButton,
        'success' : SuccessButton,
        'danger' : DangerButton,
        'disabled' : DisabledButton
    }
    const ThemeButton = theme[variant];
    return ( 
    <ThemeButton > 
        {children}
     </ThemeButton>
    )
}

//Button