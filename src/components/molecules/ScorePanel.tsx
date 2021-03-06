import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Box from "../atom/Box";

interface ScorePanelProps {
    className?: string;
    letters: string[];
    totalAnswerd: number;
    totalFirstTry: number;
}

const ScorePanel = styled<React.FC<ScorePanelProps>>(
    ({ className, letters, totalAnswerd, totalFirstTry }) => {

        const [t] = useTranslation();

        const twoNumbers = (n: number)=> n > 9 || n === 0 ? n.toString() : `0${n}`;

        return (
            <div className={className}>
                <Box>
                    <div className="principal">
                        <div>
                            <h2>{t('speller.instruction')}</h2>
                        </div>
                        <div>
                            <span>{t('speller.correctsFirstTry')}
                                <strong>{twoNumbers(totalFirstTry)}</strong>
                            </span>
                            <span>{t('speller.question')}
                                <strong>{twoNumbers(totalAnswerd)}</strong>
                            </span>
                        </div>
                    </div>
                    <div className="letters">
                        <label>{t('speller.letters')}</label>
                        <h2>{letters.join(' - ')}</h2>
                    </div>
                </Box>
            </div>
        );
    }
)`
    margin-bottom: var(--section-spacer);
    & h2 {
        margin: 0;
    }
    & .principal {
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--spacer);
    }
    & .principal > div {
        display: flex;
    }
    & .principal > div:first-child {
        flex: 1;
    }
    & .principal > div span {
        margin-left: 10px;
        text-align: right;
    }
    & .principal > div span strong {
        display: block;
    }
    @media screen and (max-width: 600px) {
        & .principal {
            display: block;
        }
        & .principal > div:first-child {
            margin-bottom: var(--spacer);
        }
        & .principal > div:last-child {
            justify-content: space-between;
        }
        & .principal > div span {
            margin-left: 0;
            margin-right: 10px;
            text-align: right;
        }
        & .letters, & h2 {
            text-align: center;
        }
    }
`;

export default ScorePanel;