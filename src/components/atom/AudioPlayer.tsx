import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import styled from 'styled-components';

interface AudioPlayerProps {
    src: string;
}

const AudioPlayer = styled<React.FC<AudioPlayerProps>>(
    ({ src, ...props }) => {
        return (
            <div>
                <ReactAudioPlayer
                    {...src}
                    autoPlay
                    controls
                />
            </div>
        );
    }
)``;