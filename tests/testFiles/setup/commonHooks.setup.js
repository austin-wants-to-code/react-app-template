/**
 * Common hooks for all tests
 */

import { cleanup } from '@testing-library/react';

afterEach(() => {
  //Clean DOM of React components
  cleanup();
});