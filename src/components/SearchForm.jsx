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
import { Flex, Picker, Item, SearchField } from '@adobe/react-spectrum';

import { useLocaleContext } from '../providers/LocaleProvider';
import { useSearchAssetsContext } from '../providers/SearchAssetsProvider';

const SearchForm = memo(() => {
  const { localeStrings } = useLocaleContext();

  const {
    searchTermCurrent,
    selectedAssetType,
    handleSearchTermClear,
    handleSearchTermChange,
    handleSearchTermSubmit,
    handleAssetTypeChange,
  } = useSearchAssetsContext();

  const options = localeStrings.assets.assetType.map((option) => {
    return { name: option.key };
  });

  return (
    <Flex width="100%" direction="row" gap="size-100" justify-content="center">
      <Picker
        marginStart="size-200"
        width="111px"
        label={localeStrings.ui.searchFormPickerLabel}
        items={options}
        defaultSelectedKey={localeStrings.assets.assetType[0]}
        selectedKey={selectedAssetType}
        onSelectionChange={handleAssetTypeChange}
      >
        {localeStrings.assets.assetType.map((option) => (
          <Item key={option.key}>{option.label}</Item>
        ))}
      </Picker>
      <SearchField
        marginEnd="size-10"
        label={localeStrings.ui.searchFormSearchFieldLabel}
        width="169px"
        // flex={1}
        value={searchTermCurrent}
        onClear={handleSearchTermClear}
        onChange={handleSearchTermChange}
        onSubmit={handleSearchTermSubmit}
      />
    </Flex>
  );
});

export default SearchForm;
