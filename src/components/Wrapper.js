import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Spanish from '../languages/es-MX.json';
import English from '../languages/en-US.json';
export const Context = React.createContext();

const localLang = navigator.language;
let lang;
localLang === 'en-US' ? (lang = English) : (lang = Spanish);

export default function Wrapper({ children }) {
  const [locale, setLocale] = useState(localLang);
  const [messages, setMessages] = useState(lang);

  const selectLang = e => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    newLocale === 'es-MX' ? setMessages(Spanish) : setMessages(English);
  };

  return (
    <Context.Provider value={{ locale, selectLang }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </Context.Provider>
  );
}
