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

const getLocales = () => {
  return {
    // Default locale when no locale match is found
    defaultLanguage: 'en-US',
    // List of supported locales, defined in locale folder
    supportedLanguages: [
      'cy-GB',
      'da-DK',
      'de-DE',
      'en-US',
      'es-ES',
      'fi-FI',
      'fr-FR',
      'it-IT',
      'ja-JP',
      'ko-KR',
      'nb-NO',
      'nl-NL',
      'pt-BR',
      'sv-SE',
      'zh-Hans-CN',
      'zh-Hant-TW',
      'zz-ZZ',
    ],
  };
};

export default getLocales;
