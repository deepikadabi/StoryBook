import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import './buttons.css'

export default function buttons(props) {
    const {variant , tooltip, label, children, disabled, ...rest } = props;
    
    return (
        <Tooltip title={tooltip.content} placement={tooltip.position}>
        <button className={`button ${variant}`} {...rest}>
            {label}
        </button>
        </Tooltip>
    )
}
