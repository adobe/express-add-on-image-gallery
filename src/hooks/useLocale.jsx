/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { useState, useEffect, useCallback } from 'react';
import getLocales from '../locales/localeList';

export const useLocale = (initialLocale) => {
  const { defaultLanguage, supportedLanguages } = getLocales();
  const [selectedLocale, setSelectedLocale] = useState(
    supportedLanguages.includes(initialLocale)
      ? initialLocale
      : defaultLanguage,
  ); // Set initial locale, fallback locale is defaultLocale
  const [localeStrings, setLocaleStrings] = useState({});
  const [loading, setLoading] = useState(true);

  // Initialize language
  const initializeLanguage = useCallback((locale) => {
    setSelectedLocale(locale);
  }, []);

  // Use this function to change locale
  const changeLocale = useCallback((locale) => {
    setSelectedLocale(locale);
  }, []);

  useEffect(() => {
    const fetchLocaleStrings = async () => {
      try {
        const response = await fetch(
          `locales/resources/${selectedLocale}.json`,
        );
        const data = await response.json();
        setLocaleStrings(data);
        setLoading(false); // Set loadding state to false
      } catch (error) {
        console.error('Error fetching locale strings:', error);
      }
    };

    fetchLocaleStrings();
  }, [selectedLocale]);

  // Initialize language
  useEffect(() => {
    initializeLanguage(selectedLocale);
  }, []);

  return { selectedLocale, localeStrings, loading, changeLocale };
};
