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

import React, { memo } from 'react';
import {
  IllustratedMessage,
  Heading,
  Content,
  Flex,
} from '@adobe/react-spectrum';
import NoSearchResults from '@spectrum-icons/illustrations/NoSearchResults';

import { useLocaleContext } from '../providers/LocaleProvider';

const NoResults = memo(() => {
  const { localeStrings } = useLocaleContext();

  return (
    <Flex
      direction="row"
      width="100%"
      height="80vh"
      alignItems="center"
      justifyContent={'center'}
    >
      <IllustratedMessage>
        <NoSearchResults />
        <Heading>{localeStrings.ui.noSearchResultsHeading}</Heading>
        <Content>{localeStrings.ui.noSearchResultsContent}</Content>
      </IllustratedMessage>
    </Flex>
  );
});

export default NoResults;
