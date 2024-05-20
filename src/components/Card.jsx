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
import { useAddAssetsContext } from '../providers/AddAssetsProvider.jsx';

const Card = memo(({ imageUrl, title }) => {
  const { handleCardKeyDown, handleImageDrag, handleCardClick } =
    useAddAssetsContext();

  return (
    <div
      tabIndex="0"
      className="card"
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      onMouseOver={handleImageDrag}
    >
      <View
        width="100%"
        height="70%"
        position="relative"
        borderTopStartRadius="medium"
        borderTopEndRadius="medium"
      >
        <div className="image-container">
          <img src={imageUrl} alt={title} />
        </div>
      </View>
      <View
        width="100%"
        height="30%"
        position="relative"
        borderBottomStartRadius="medium"
        borderBottomEndRadius="medium"
        backgroundColor="gray-75"
        overflow="hidden"
      >
        <div className="card-title">
          <span style={{ fontSize: 'smaller' }}>{title}</span>
        </div>
      </View>
    </div>
  );
});

export default Card;
