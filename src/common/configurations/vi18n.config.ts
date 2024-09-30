import { createI18n } from "vue-i18n";
import enMessage from "../localizations/en.json"
import laMessage from "../localizations/la.json"

const locale = localStorage.getItem("locale") || "la"

const i18n = createI18n({
    legacy:true,
    locale:locale,
    fallbackLocale:'en',
    messages:{
        en:enMessage,
        la:laMessage,
    }
})

export default i18n