import React from "react";
import styled from "styled-components";

interface LetterProps {

}

const Letter = styled<React.FC<LetterProps>>(
    (props) => {
        return (
            <div {...props}>

            </div>
        );
    }
)``;