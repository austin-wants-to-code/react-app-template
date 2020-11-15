/**
 * Fundamental hooks/functions needed for tests to work with test libraries
 */

import { cleanup } from '@testing-library/react';

beforeEach(() => {
});

afterEach(() => {
  //Clean DOM of React components
  cleanup();
});