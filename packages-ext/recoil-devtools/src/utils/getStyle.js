/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 *
 * Recoil DevTools browser extension.
 *
 * @emails oncall+recoil
 * @flow strict-local
 * @format
 */
'use strict';

export const getStyle = (
  source: {[key: string]: {[key: string]: string | number}},
  entries: {[key: string]: boolean},
) => {
  return Object.entries(entries).reduce((acc, [key, value]) => {
    let nextAcc = {...acc};
    if (Boolean(value)) {
      nextAcc = {...source[key]};
    }

    return nextAcc;
  }, {});
};
