import React from "react";
import styled from "styled-components";

interface ButtonProps {
    className?: string;
    children?: any;
    onClick?: Function;
    color?: 'primary' | 'secondary';
    variant?: 'contained';
}

const Button = styled<React.FC<ButtonProps>>(
    ({children, color, onClick, variant, className}) => {
        const _className = `${className ?? ''} ${color ?? ''} ${variant ?? ''}`;
        return <button className={_className} onClick={() => onClick && onClick()}>
            {children}
        </button>
    }
)`
    background: none;
    border: none;
    font-size: var(--button-font-size);
    cursor: pointer;
    &:hover {
        opacity: .8;
    }
    &:active {
        filter: invert(50%);
    }
    &.primary {
        color: var(--primary-color);
    }
    &.secondary {
        color: var(--secondary-color);
    }
    &.contained {
        color: var(--button-contained-color);
        background-color: var(--button-contained-bg);
        border-radius: 4px;
        padding 10px 15px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, .4);
    }
    &.contained.primary {
        background-color: var(--primary-color);
    }
    &.contained.secondary {
        background-color: var(--secondary-color);
    }
`;

export default Button;