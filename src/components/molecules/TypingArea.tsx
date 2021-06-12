import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Box from "../atom/Box";
import InputText from "../atom/InputText";

interface TypingAreaProps {
    className?: string;
    disabled?: boolean;
    maxLength?: number;
    value?: string;
    onInput: Function;
}

const TypingArea = styled<React.FC<TypingAreaProps>>(
    ({ 
        className, 
        disabled, 
        maxLength,
        value,
        onInput
    }) => {

        const [t] = useTranslation();

        return (
            <div className={className} style={{opacity: disabled ? .5 : 1}}>
                <Box>
                    <label>{t('speller.typingInstructions')}</label>
                    <InputText 
                        disabled={disabled} 
                        maxLength={maxLength}
                        value={value}
                        onInput={e => onInput(e.currentTarget.value)}
                    />
                </Box>
            </div>
        );
    }
)`
    &.disabled {
        opacity: .5;
    }
    margin: var(--section-spacer) 0;
    label {
        display: block;
        margin-bottom: var(--spacer);
    }
`;

export default TypingArea;