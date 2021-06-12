import React, { Children } from "react";
import styled from "styled-components";

interface CharacterPlaceholderProps {
    className?: string;
    character?: string;
}

const CharacterPlaceholder = styled<React.FC<CharacterPlaceholderProps>>(
    ({className, character}) => {
        return (
            <div className={className}>
                {character ?? ''}
            </div>
        );
    }
)`
    display: inline-block;
    float: left;
    padding 10px 0;
    color: var(--character-placeholder-color);
    border: 1px var(--character-placeholder-bg) solid;
    margin: 5px;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    height: 40px;
    width: 40px;
    box-sizing: border-box;
    text-align: center;
`;

export default CharacterPlaceholder;