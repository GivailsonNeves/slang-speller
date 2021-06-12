import React, { useState } from "react";
import styled from "styled-components";
import Box from "../atom/Box";
import Character from "../atom/Character";
import CharacterPlaceholder from "../atom/CharacterPlaceholder";

interface PuzzleAreaProps {
    className?: string;
    characteres: string[];
}

const PuzzleArea = styled<React.FC<PuzzleAreaProps>>(
    ({ className, characteres }) => {

        const [selectedChars, setSelectedChars] = useState<number[]>([]);

        const hdlCharSelected = (index: number) => {
            setSelectedChars([...selectedChars, index])
        }

        return (
            <div className={className}>
                <Box>
                    <div>
                        {characteres.map((c, index) => (
                            <CharacterPlaceholder
                                character={selectedChars[index] !== undefined ?
                                    characteres[selectedChars[index]] :
                                    ''}
                            />
                        ))}
                    </div>
                    <div>
                        {characteres.map((c, index) => (
                            <Character
                                onClick={() => hdlCharSelected(index)}
                                key={index}>
                                {c}
                            </Character>
                        ))}
                    </div>
                </Box>
            </div>
        );
    }
)`
    margin: 30px 0;
    & > div {
        display: flex;
    }
    & > div > div {
        min-height: 180px;
        padding: 10px;
    }
    & > div > div:last-child {
        border-left: 1px solid var(--border-color);
        width: 300px
    }
    & > div > div:last-child button {
        margin 5px;
    }
    & > div > div:first-child {
        flex: 1;
    }
`;

export default PuzzleArea;
