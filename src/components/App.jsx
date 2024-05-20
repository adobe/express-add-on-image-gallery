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
import { View } from '@adobe/react-spectrum';

import Initializer from './Initializer';

import SearchForm from './SearchForm';
import CategoryList from './CategoryList';
import AboutAddOn from './AboutAddOn';
import './App.css';

const App = memo(({ addOnSdk }) => {
  return (
    <Initializer addOnSdk={addOnSdk}>
      <View
        width="100%"
        margin="size-0"
        padding="size-0"
        position="relative"
        backgroundColor="default"
      >
        <AboutAddOn>
          <View
            width="100%"
            height="size-900"
            position="fixed"
            top="size-0"
            left="size-0"
            backgroundColor="gray-75"
            zIndex={10}
          >
            <SearchForm />
          </View>
          <View
            width="100%"
            paddingBottom="size-200"
            position="absolute"
            top="size-900"
            backgroundColor="default"
          >
            <CategoryList />
          </View>
        </AboutAddOn>
      </View>
    </Initializer>
  );
});

export default App;
