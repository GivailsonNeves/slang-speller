import React from "react";
import styled from "styled-components";
import Speller from "../../components/templates/speller";

interface ActivityProps {

}

const Activity = styled<React.FC<ActivityProps>>(
    (props) => {
        return (
            <Speller />
        )
    }
)``;

export default Activity;