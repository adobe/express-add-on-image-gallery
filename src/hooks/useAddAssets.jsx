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

import { useCallback } from 'react';

import { useAddOnSdkContext } from '../providers/AddOnSdkProvider';

export const useAddAssets = () => {
  // Use AddOnSdk
  const addOnSdk = useAddOnSdkContext();

  /**
   * Get the binary object for the image.
   */
  const getBlob = async (url) => {
    return await fetch(url).then((response) => response.blob());
  };

  /**
   * Add the binary object for the image to document.
   */
  const addToDocument = async (event) => {
    const url = event.currentTarget.querySelector('img').src;
    const blob = await getBlob(url);
    addOnSdk.app.document.addImage(blob);
  };

  /**
   * Enable "enter" key down event of an image to a document.
   */
  const handleCardKeyDown = useCallback((event) => {
    if (event.keyCode == 13) {
      addToDocument(event);
    }
  }, []);

  /**
   * Enable dragging of an image to a document.
   */
  const handleImageDrag = useCallback((event) => {
    addOnSdk.app.enableDragToDocument(event.currentTarget, {
      previewCallback: (element) => {
        return new URL(element.querySelector('img').src);
      },
      completionCallback: async (element) => {
        const blob = await getBlob(element.querySelector('img').src);
        return [{ blob }];
      },
    });
  }, []);

  /**
   * Enable clicking of an image to a document.
   */
  const handleCardClick = useCallback((event) => {
    addToDocument(event);
  }, []);

  return { handleCardKeyDown, handleImageDrag, handleCardClick };
};
