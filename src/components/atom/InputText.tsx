import styled from "styled-components";

const InputText = styled.input.attrs({
    type:"text"
})`
    border-radius: 8px;
    border: 1px #ccc solid;
    padding: 15px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, .2);
`;

export default InputText;