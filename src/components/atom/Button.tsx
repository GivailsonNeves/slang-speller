import React from "react";
import styled from "styled-components";

interface ButtonProps {

}

const Button = styled<React.FC<ButtonProps>>(
    (props) => {
        return <div {...props}></div>
    }
)``;

export default Button;