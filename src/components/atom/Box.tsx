import React from "react";
import styled from "styled-components";

interface BoxProps {
    className?: string;
    children?: any;
}

const Box = styled<React.FC<BoxProps>>(
    ({className, children, ...props}) => {
        return (
            <div className={className}>
                {children}
            </div>
        );
    }
)`
    border-radius: 8px;
    border: 1px #ccc solid;
    padding: 15px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, .2);
`;

export default Box;