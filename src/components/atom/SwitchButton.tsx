import React, { useState } from "react";
import styled from "styled-components";

interface SwitchButtonProps {
    className?: string;
    actived?: boolean;
    onChange?: Function;
}

const SwitchButton = styled<React.FC<SwitchButtonProps>>(
    ({className, actived, onChange}) => {

        const [active, setActive] = useState(!!actived);
        
        const hdlClick = () => {
            if (onChange) {
                onChange(!active);
            }
            setActive(!active);
        }

        const getStyleItem = () => {
            return active ? 
            { 
                left: '50%'
            } : {
                left: '0%'
            }
        }

        return (
            <button onClick={hdlClick} className={className}>
                <span style={getStyleItem()} />
            </button>
        );
    }
)`
    border: 1px gray solid;
    background: var(--switch-bg);
    cursor: pointer;
    display: block;
    height: 15px;
    width: 40px;
    padding: 0;
    position: relative;
    overflow: hidden;
    & > span {
        transition: .3s all ease-in-out;
        display: block;
        width: 50%;
        height: 15px;
        position: absolute;
        top: 0;
        background: var(--switch-tracker);
    }
`;

export default SwitchButton;