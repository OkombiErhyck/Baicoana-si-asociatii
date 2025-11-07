import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('appLanguage') || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('appLanguage', language);
    }
  }, [language]);

  const setLanguage = (nextLanguage) => {
    setLanguageState(nextLanguage);
  };

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

