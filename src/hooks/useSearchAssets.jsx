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

import { useState, useEffect, useCallback, useMemo } from 'react';
import getImageData from '../assets/assetList';
import { useLocaleContext } from '../providers/LocaleProvider';

export const useSearchAssets = () => {
  // Import locale strings and set them to images data
  const { localeStrings } = useLocaleContext();
  const imageData = useMemo(() => getImageData(localeStrings), []);

  // Initialize states of search term, assets type and search results.
  const [searchTermCurrent, setSearchTermCurrent] = useState('');
  const [searchTermSubmit, setSearchTermSubmit] = useState('');
  const [selectedAssetType, setSelectedAssetType] = useState('All');
  const [searchResults, setSearchResults] = useState(imageData);
  const [emptyResults, setEmptyResults] = useState(false);

  /**
   * Set a state of search term
   */
  const handleSearchTermChange = useCallback((event) => {
    if (event === '') {
      setSearchTermSubmit('');
    }
    setSearchTermCurrent(event);
  }, []);

  /**
   * Set a state of search term submitted
   */
  const handleSearchTermSubmit = useCallback((event) => {
    setSearchTermSubmit(event);
  }, []);

  /**
   * Clear search term and serch term submitted
   */
  const handleSearchTermClear = useCallback(() => {
    setSearchTermSubmit('');
    setSearchTermCurrent('');
  }, []);

  /**
   * Set a state of selected asset type
   */
  const handleAssetTypeChange = useCallback((event) => {
    setSelectedAssetType(event);
  }, []);

  /**
   * Submit search
   */
  const handleSearchSubmit = () => {
    const filteredCards = imageData.filter((data) => {
      const isAssetTypeMatch =
        selectedAssetType === 'All' || data.assetType === selectedAssetType;

      const isSearchMatch =
        data.title.toLowerCase().includes(searchTermSubmit.toLowerCase()) ||
        searchTermSubmit.trim() === '';

      return isSearchMatch && isAssetTypeMatch;
    });

    if (filteredCards.length) {
      setEmptyResults(false);
      setSearchResults(filteredCards);
    } else {
      setEmptyResults(true);
    }
  };

  /**
   * Submit search when states of search term and asset are changed
   */
  useEffect(() => {
    handleSearchSubmit();
  }, [searchTermSubmit, selectedAssetType]);

  return {
    searchTermCurrent,
    selectedAssetType,
    searchResults,
    emptyResults,
    handleSearchTermChange,
    handleSearchTermSubmit,
    handleSearchTermClear,
    handleAssetTypeChange,
  };
};
