import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from '../../src/components/App';
import { render } from '@testing-library/react';

describe('<App>', () => {
  it('renders a header', () => {
    const root = render(<App/>);
    expect(root.getByRole('heading').textContent).toBeTruthy();
  });

  it('renders some additional text on the page', () => {
    const root = render(<App/>);
    expect(root.getByText('This is some sample text!')).toBeTruthy();
  });

  describe('Snapshot tests', () => {
    it('matches the existing snapshot', () => {
      const actualSnapshot = TestRenderer
        .create(<App/>)
        .toJSON();
      expect(actualSnapshot).toMatchSnapshot();
    });
  });
});