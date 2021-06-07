import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import DefaultPtBr from './pt-br/default.json';

const resources = {
    'pt-BR': {
        translation: DefaultPtBr
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "pt-BR",

        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;