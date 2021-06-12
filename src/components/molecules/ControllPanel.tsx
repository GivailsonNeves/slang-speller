import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import AudioPlayer from "../atom/AudioPlayer";
import Box from "../atom/Box";
import Button from "../atom/Button";

interface ControllPanelProps {
    className?: string;
    onNext?: Function;
    onAnswer?: Function;
    soundURL: string;
}

const ControllPanel = styled<React.FC<ControllPanelProps>>(
    ({ 
        className,
        onNext,
        onAnswer,
        soundURL
    }) => {

        const [t] = useTranslation();

        return (
            <div className={className}>
                <Box>
                    <div className="playerArea">
                        <AudioPlayer src={soundURL} />
                    </div>
                    <div className="buttons">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => onAnswer && onAnswer()}
                        >
                            {t('speller.send')}
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => onNext && onNext()}
                        >
                            {t('speller.next')}
                        </Button>
                    </div>
                </Box>
            </div>
        );
    }
)`
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--section-spacer);
    }
    & > div  button {
        margin-left: 10px;
    }

    @media screen and (max-width: 580px) {
        & > div {
            display: block;
        }
        & .playerArea {
            text-align: center;
        }
        & .buttons {
            padding-top: var(--spacer);
            display flex;
            justify-content: space-between;
        }
        & .buttons button {
            width: 45%;
        }
    }
`;

export default ControllPanel;