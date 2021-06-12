import styled from "styled-components"
import ControllPanel from "../molecules/ControllPanel";
import PuzzleArea from "../organisms/PuzzleArea";
import ScorePanel from "../molecules/ScorePanel"
import TypingArea from "../molecules/TypingArea"
import SwitchButton from "../atom/SwitchButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface SpellerProps {
    className?: string;
    letters: string[];
    soundURL: string;
}

const Speller = styled<React.FC<SpellerProps>>(
    ({
        letters, 
        className,
        soundURL
    }) => {

        const [t] = useTranslation();
        const [answerType, setAnswerType] = useState<'sorting' | 'typing'>('sorting');
        const [textValue, setTextValue] = useState<string>('');

        const hdlChangePanel = (actived: boolean) => {
            setAnswerType(actived ? 'typing' : 'sorting');
        }

        return <div className={className}>
            <ScorePanel letters={letters} />
            <div className="switch-panel">
                <label>{t('speller.dragOrType')}</label>
                <SwitchButton
                    onChange={hdlChangePanel} 
                    actived={answerType === 'typing'} />
            </div>
            <PuzzleArea
                disabled={answerType === 'typing'}
                characteres={letters} 
            />
            <TypingArea 
                disabled={answerType === 'sorting'}
                maxLength={letters.length}
                value={textValue}
                onInput={(value: string) => setTextValue(value)}
            />
            <ControllPanel 
                soundURL={soundURL}
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
`;

export default Speller;