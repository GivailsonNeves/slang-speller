import styled from "styled-components"
import ControllPanel from "../molecules/ControllPanel";
import PuzzleArea from "../organisms/PuzzleArea";
import ScorePanel from "../molecules/ScorePanel"
import TypingArea from "../molecules/TypingArea"
import SwitchButton from "../atom/SwitchButton";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { CorrectAnswer } from "../../model/CorrectAnswer";
import ModalFeedback from "../molecules/ModalFeedback";

import Spinner from '../../assets/imgs/loading.gif';

interface SpellerProps {
    className?: string;
    letters: string[];
    soundURL: string;
    onNextQuestion: Function;
    onAnswerQuestion: Function;
    onFeedbackClose: Function;
    totalAnswerd: number;
    totalFirstTry: number;
    correctAnswer?: CorrectAnswer | null;
}

const Speller = styled<React.FC<SpellerProps>>(
    ({
        letters,
        className,
        soundURL,
        onNextQuestion,
        onAnswerQuestion,
        onFeedbackClose,
        correctAnswer,
        totalAnswerd,
        totalFirstTry
    }) => {

        const [t] = useTranslation();

        const [answerType, setAnswerType] = useState<'sorting' | 'typing'>('sorting');
        const [textValue, setTextValue] = useState<string>('');
        const [sortValue, setSortValue] = useState<string>('');
        const [mobileMode, setMobileMode] = useState<boolean>(true);

        const hdlChangePanel = (actived: boolean) => {
            setAnswerType(actived ? 'typing' : 'sorting');
        }

        const hdlClose = () => {
            if (onFeedbackClose) onFeedbackClose();
            setTextValue('');
        }

        const hdlNext = () => {
            if (onNextQuestion) onNextQuestion();
        }

        const hdlAnswer = () => {
            if (onAnswerQuestion) {
                onAnswerQuestion(
                    answerType === 'sorting' && !mobileMode ? sortValue : textValue
                );
            }
        }
        const handleResize = () => {
            if (window.innerWidth < 720) {
                setMobileMode(true)
            } else {
                setMobileMode(false)
            }
          }

          useEffect(() => {
            window.addEventListener("resize", handleResize)
          })

        return <div className={className}>
            <ScorePanel
                letters={letters}
                totalAnswerd={totalAnswerd}
                totalFirstTry={totalFirstTry}
            />
            {
                !mobileMode && (
                    <div className="switch-panel">
                        <label>{t('speller.dragOrType')}</label>
                        <SwitchButton
                            onChange={hdlChangePanel}
                            actived={answerType === 'typing'} />
                    </div>
                )
            }
            {
                (letters && letters.length) ? (
                    <>
                        {
                            !mobileMode && (
                                <PuzzleArea
                                    disabled={answerType === 'typing'}
                                    characteres={letters}
                                    onSort={(sorted: string[]) => setSortValue(sorted.join(''))}
                                />
                            )
                        }

                        <TypingArea
                            disabled={answerType === 'sorting' && !mobileMode}
                            maxLength={letters.length}
                            value={textValue}
                            onInput={(value: string) => setTextValue(value)}
                        />
                    </>
                ) : <div className="loader">
                    <img src={Spinner} alt="loading" />
                </div>
            }
            <ControllPanel
                soundURL={soundURL}
                onAnswer={hdlAnswer}
                onNext={hdlNext}
            />
            <ModalFeedback
                onClose={hdlClose}
                correctAnswer={correctAnswer}
                open={!!correctAnswer && !!Object.keys(correctAnswer).length}
            />
        </div>;
    }
)`
    max-width: 1024px;
    width: 95%;
    margin: var(--section-spacer) auto 0;
    & .switch-panel {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    & .switch-panel label {
        margin-right: var(--spacer);
    }
    & .loader {
        height: 232px;
        text-align: center;
    }
    & .loader img {
        width: 80px;
        margin-top: 100px;
    }
`;

export default Speller;