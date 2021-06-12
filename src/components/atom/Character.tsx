import React, { Children } from "react";
import styled from "styled-components";
import Button from "./Button";

interface CharacterProps {
    className?: string;
    children: any;
    onClick?: Function;
}

const Character = styled<React.FC<CharacterProps>>(
    ({className, onClick, children}) => {
        return (
            <Button
                onClick={onClick}
                variant="contained" 
                className={className}>
                {children}
            </Button>
        );
    }
)`
    width: 40px;
`;

export default Character;