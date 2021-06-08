import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Box from "../atom/Box";

interface ScorePanelProps {
    className?: string;
}

const ScorePanel = styled<React.FC<ScorePanelProps>>(
    ({ className, ...props }) => {

        const [t] = useTranslation();

        return (
            <div className={className}>
                <Box>
                    <div>
                        <p>{t('speller.instruction')}</p>
                    </div>
                    <div>
                        <span>{t('speller.correctsFirstTry')}
                            <strong>10</strong>
                        </span>
                        <span>{t('speller.answered')}
                            <strong>10</strong>
                        </span>
                    </div>
                </Box>
            </div>
        );
    }
)`
    & > div {
        display: flex;
        justify-content: space-between;
    }
    & > div > div {
        display: flex;
    }
    & > div > div p {
        margin: 0;
        font-size: 20px;
        font-weight: bold;
    }
    & > div > div:first-child {
        flex: 1;
    }
    & > div > div span {
        margin-left: 10px;
        text-align: right;
    }
    & > div > div span strong {
        display: block;
    }
`;

export default ScorePanel;