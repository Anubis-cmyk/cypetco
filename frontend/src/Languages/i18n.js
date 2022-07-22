import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import HttpApi from 'i18next-http-backend';


const Languages =['en','si','ta'];
i18n
  .use(initReactI18next) 
  .use(Backend)
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs:['en','si','ta'],
    whitelist: Languages,
    fallbackLng: "en",
    detection:{
        order:['htmlTag','cookie','localStorage','path','subdomain'],
        caches:['cookie']
    },
    backend:{
        loadPath:'/assets/locales/{{lng}}/translation.json',
    },
    react:{useSuspense:false}

  });
