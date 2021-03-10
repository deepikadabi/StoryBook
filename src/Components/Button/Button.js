import React from 'react'
import styled, {css} from 'styled-components'
//import './Button.css'


function Button (props) {
    const {variant = 'primary', children} = props
    let primary = false;
    let secondary = false;
    let success = false;
    let danger = false;
    let disabled = false;  
    
    switch (variant) {
        case 'primary':
            primary = true;
            break;
        case 'secondary':
            secondary = true;
            break;
        case 'success':
            success = true;
            break;
        case 'danger':
            danger = true;
            break;
        case 'disabled':
            disabled = true;
            break;
        default:
            break;
    }

    return (   
        <Button1 primary={primary} secondary={secondary} disabled={disabled} success={success} danger={danger}>  
            {children}
        </Button1>
    )
}

export default Button

const Button1 = styled.button`
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

  ${props =>
    props.primary &&
    css`
       background-color: white;
        color: black;
        border: 2px solid #555555;
    &:hover{
        background-color: #555555;
        color: white;
    }

    `};

    ${props =>
    props.secondary &&
    css`
           background-color: white; 
            color:#008CBA; 
            border: 2px solid #008CBA;
        &:hover{
            background-color: #008CBA;
            color: white;
        }

    `};


    ${props =>
    props.danger &&
    css`
       background-color: white; 
    color: #f44336; 
    border: 2px solid #f44336;

    &:hover{
        background-color: #f44336;
        color: white;
    }
    `};


    ${props =>
    props.disabled &&
    css`
        background-color: white;
    color: gray;
    border: 2px solid #e7e7e7;
    &:hover{
        background-color: #e7e7e7;
    }
    `};

    ${props =>
    props.success &&
    css`
       background-color: white; 
        color: #4CAF50; 
        border: 2px solid #4CAF50;
    &:hover{
        background-color: #4CAF50;
        color: white;
    }
    `};
` 