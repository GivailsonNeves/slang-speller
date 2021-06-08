import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import AudioPlayer from "../atom/AudioPlayer";
import Box from "../atom/Box";
import Button from "../atom/Button";

interface ControllPanelProps {
    className?: string;
}

const ControllPanel = styled<React.FC<ControllPanelProps>>(
    ({ className, ...props }) => {

        const [t] = useTranslation();

        return (
            <div className={className}>
                <Box>
                    <div>
                        <AudioPlayer src="https://cdn.slangapp.com/sounds/a33979024fe2ac9355edd64e96df145b47f73d79/normalized.mp3" />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="primary">
                            {t('speller.send')}
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary">
                            {t('speller.showAnswer')}
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
    }
    & > div  button {
        margin-left: 10px;
    }
`;

export default ControllPanel;