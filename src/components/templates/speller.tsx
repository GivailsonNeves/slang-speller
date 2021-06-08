import styled from "styled-components"
import ControllPanel from "../molecules/ControllPanel";
import ScorePanel from "../molecules/ScorePanel"

interface SpellerProps {
    className?: string;
}

const Speller = styled<React.FC<SpellerProps>>(
    (props) => {
        return <div {...props}>
            <ScorePanel />
            <ControllPanel />
        </div>;
    }
)`
    max-width: 1024px;
    margin: 50px auto 0;
`;

export default Speller;