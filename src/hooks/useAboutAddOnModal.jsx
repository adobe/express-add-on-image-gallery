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

import { useAddOnSdkContext } from '../providers/AddOnSdkProvider';

export const useAboutAddOnModal = () => {
  // Use AddOnSdk
  const addOnSdk = useAddOnSdkContext();

  // Set client storage
  const clientStorage = addOnSdk.instance.clientStorage;

  // Initialize a state of the modal
  const [showModal, setShowModal] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isPrimaryActionDisabled, setPrimaryActionDisabled] = useState(true);

  const primaryActionEnable = useCallback(() => {
    setPrimaryActionDisabled(false);
  }, []);

  /**
   * Get the data from the client storage.
   */
  const getData = async (key) => {
    try {
      return await clientStorage.getItem(key);
    } catch (error) {
      console.log('Failed to get the value from the ClientStorage.');
    }
  };

  /**
   * Set the data to the client storage.
   */
  const setData = async (key, value) => {
    try {
      await clientStorage.setItem(key, value);
    } catch (error) {
      console.log('Failed to set the value to the ClientStorage.');
    }
  };

  const handleModalClose = useCallback(() => {
    // Dismiss the detail modal and save the state
    setShowModal(false);
    setData('showDetail', 'false');
  }, []);

  useEffect(() => {
    const _getDataAndSetAboutAddOn = async () => {
      const storedShowDetail = await getData('showDetail');
      setShowModal(storedShowDetail !== 'false');
      setLoading(false);
    };
    _getDataAndSetAboutAddOn();
  }, []);

  return {
    showModal,
    loading,
    handleModalClose,
    isPrimaryActionDisabled,
    primaryActionEnable,
  };
};
