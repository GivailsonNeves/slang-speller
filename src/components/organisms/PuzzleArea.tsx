import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Box from "../atom/Box";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useTranslation } from "react-i18next";

interface PuzzleAreaProps {
    className?: string;
    characteres: string[];
    disabled?: boolean;
    onSort?: Function;
}

const PuzzleArea = styled<React.FC<PuzzleAreaProps>>(
    ({ 
        className, 
        characteres, 
        disabled, 
        onSort 
    }) => {

        const [items, setItems] = useState<any[]>(characteres);

        const [t] = useTranslation();

        useEffect(() => {
            if (onSort) onSort(items)
        }, [items, onSort])

        const reorder = (list: any[], startIndex: number, endIndex: number) => {
            const result = Array.from(list);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);

            return result;
        };

        const hdlDragEnd = (result: any) => {

            if (!result.destination) {
                return;
            }

            setItems(reorder(
                items,
                result.source.index,
                result.destination.index
            ));
        }

        const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
            userSelect: 'none',
            padding: '12px',
            margin: `0 8px 0 0`,
            background: isDragging ? 'var(--primary-color)' : 'var(--character-color)',
            ...draggableStyle,
        });

        const getListStyle = (isDraggingOver: boolean) => ({
            background: isDraggingOver ? 'lightblue' : 'var(--character-placeholder-bg)',
            display: 'flex',
            padding: 8,
            overflow: 'auto',
        });

        return (
            <div className={className} style={{opacity: disabled ? .5 : 1}}>
                <Box>
                    <label>{t('speller.sortInstructions')}</label>
                    <DragDropContext onDragEnd={hdlDragEnd}>
                        <Droppable droppableId="droppable" direction="horizontal">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                    {...provided.droppableProps}
                                >
                                    {items.map((c, index) => (
                                        <Draggable
                                            isDragDisabled={disabled}
                                            key={index} 
                                            draggableId={index.toString()} 
                                            index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}
                                                >
                                                    {c}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Box>
            </div>
        );
    }
)`
    margin: var(--section-spacer) 0;
    label {
        display: block;
        margin-bottom: var(--spacer);
    }
`;

export default PuzzleArea;
