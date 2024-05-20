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
import { View, Text, Heading } from '@adobe/react-spectrum';

import CardList from './CardList';
import NoResults from './NoResults';
import { useLocaleContext } from '../providers/LocaleProvider';
import { useSearchAssetsContext } from '../providers/SearchAssetsProvider';

const CategoryList = memo(() => {
  const { searchResults, emptyResults } = useSearchAssetsContext();
  const { localeStrings } = useLocaleContext();

  /**
   * Grouping by assets category
   */
  const groupedResults = {};
  searchResults.forEach((data) => {
    if (!groupedResults[data.category]) {
      groupedResults[data.category] = [];
    }
    groupedResults[data.category].push(data);
  });

  return (
    <>
      {emptyResults ? (
        <NoResults />
      ) : (
        <>
          {Object.entries(groupedResults).map(([category, categoryData]) => (
            <View width="100%" key={category}>
              <Heading
                level={3}
                marginTop={16}
                marginBottom={16}
                marginStart={16}
              >
                <Text>{localeStrings.assets.category[category]}</Text>
              </Heading>
              <CardList cards={categoryData} />
            </View>
          ))}
        </>
      )}
    </>
  );
});

export default CategoryList;
