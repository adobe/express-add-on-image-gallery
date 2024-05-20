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
import { DialogContainer, AlertDialog, Link } from '@adobe/react-spectrum';
import LinkOutLight from '@spectrum-icons/workflow/LinkOutLight';

import { useLocaleContext } from '../providers/LocaleProvider';
import { useAboutAddOnModalContext } from '../providers/AboutAddOnModalProvider';
import Loading from './Loading';

const AboutAddOn = memo(({ children }) => {
  const { localeStrings } = useLocaleContext();

  const {
    showModal,
    loading,
    handleModalClose,
    isPrimaryActionDisabled,
    primaryActionEnable,
  } = useAboutAddOnModalContext();

  const contentTemplate = localeStrings.ui.aboutThisAddOnModalContent;
  const content = contentTemplate.replace(
    '{aboutThisAddOnModalContentLink}',
    `<a href="${localeStrings.url.aboutThisAddOnModalContentLinkURL}" target="_blank">${localeStrings.ui.aboutThisAddOnModalContentLinkText}</a>`,
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : showModal ? (
        <DialogContainer
          onDismiss={handleModalClose}
          type="modal"
          isKeyboardDismissDisabled
        >
          <AlertDialog
            UNSAFE_className="aboutThisAddOnPrimaryButton"
            title={localeStrings.ui.aboutThisAddOnModalTitle}
            variant="confirmation"
            primaryActionLabel={localeStrings.ui.aboutThisAddOnModalActionLabel}
            isPrimaryActionDisabled={isPrimaryActionDisabled}
          >
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <p>{localeStrings.ui.aboutThisAddOnModalContent2}</p>
            <p>
              <Link onPress={primaryActionEnable}>
                <a
                  href={localeStrings.url.aboutThisAddOnModalTermsofUseURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>
                    {localeStrings.ui.aboutThisAddOnModalTermsofUseText}
                  </strong>
                  <span>
                    <LinkOutLight aria-label="ArrowUpRight" size="XS" />
                  </span>
                </a>
              </Link>
            </p>
          </AlertDialog>
        </DialogContainer>
      ) : (
        <>{children}</>
      )}
    </>
  );
});

export default AboutAddOn;
