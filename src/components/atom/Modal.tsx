import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Button from "./Button";

interface ModalProps {
    className?: string;
    children?: any;
    open: boolean;
    onClose?: Function;
}

const Modal = styled<React.FC<ModalProps>>(
    ({
        className,
        children,
        onClose,
        open
    }) => {

        const [t] = useTranslation();

        const hdlClose = () => {
            if (onClose) onClose();
        }

        return (
            <div className={className} style={{ display: open ? 'block' : 'none' }}>
                <div className="wrapper">
                    <div className="header">
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={hdlClose}
                        >X</Button>
                    </div>
                    <div className="content">
                        {children}
                    </div>
                    <div className="footer">
                        <Button 
                            variant="contained"
                            color="primary"
                            onClick={hdlClose}
                        >{t('speller.ok')}</Button>
                    </div>
                </div>
            </div>
        );
    }
)`
    background-color: rgba(0, 0, 0, .4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;

    & > .wrapper {
        padding: var(--spacer);
        box-sizing: border-box;
        width: 1000%;
        max-width: 450px;
        margin: 10% auto 0;
        background-color: white;
        border-radius: 8px;
        border: 1px #ccc solid;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, .2);
    }
    & > .wrapper .header {
        text-align: right;
    }
    & > .wrapper .content {
        padding: var(--spacer);
    }
    & > .wrapper .footer {
        text-align: center;
    }
`;

export default Modal;