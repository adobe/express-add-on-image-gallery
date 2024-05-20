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

import React, { useContext } from 'react';

import LocaleContext from '../contexts/LocaleContext';
import { useLocale } from '../hooks/useLocale';
import Loading from '../components/Loading';

const LocaleProvider = ({ children, initialLocale }) => {
  const { selectedLocale, localeStrings, loading, changeLocale } =
    useLocale(initialLocale);

  if (loading) {
    return <Loading />; // Present "Loading..." while fetching locale strings
  }

  return (
    <LocaleContext.Provider
      value={{ selectedLocale, changeLocale, localeStrings }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocaleContext = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocaleContext must be used within a localeProvider');
  }
  return context;
};

export default LocaleProvider;
