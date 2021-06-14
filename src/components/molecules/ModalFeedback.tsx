import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { CorrectAnswer } from "../../model/CorrectAnswer";
import Modal from "../atom/Modal";

import SadFace from '../../assets/imgs/sad.png';
import SmileyFace from '../../assets/imgs/smiley.png';

interface ModalFeedbackProps {
    className?: string;
    open: boolean;
    onClose?: Function;
    correctAnswer?: CorrectAnswer | null;
}

const ModalFeedback = styled<React.FC<ModalFeedbackProps>>(
    ({ className, correctAnswer, ...props }) => {

        const [t] = useTranslation();

        return (
            <Modal {...props}>
                <div className={className}>
                    {correctAnswer && correctAnswer.correct ? (
                        <>
                            <h3>{t('speller.congratulations')}</h3>
                            <img src={SmileyFace} alt={t('speller.congratulations')} />
                        </>
                    ) : (
                        <>
                            <h3>{t('speller.failMessage')}</h3>
                            <p>{t('speller.answerIs')} <span>{correctAnswer?.correctAnswer}</span></p>
                            <img src={SadFace} alt={t('speller.failMessage')} />
                        </>
                    )
                    }
                </div>
            </Modal>
        );
    }
)`
    text-align: center;
    padding: var(--spacer) 0;
    & p {
        font-weight: bold;
    }
    & p span {
        color: var(--primary-color);
    }
    & img {
        max-width: 70px;
    }
`;

export default ModalFeedback;