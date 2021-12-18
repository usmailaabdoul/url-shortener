/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import { ProviderTest } from '../../../tests/test-utils';

import Statistics from '../statistics';

describe('Statistics', () => {
  it('should display correctly', () => {
    render(
      <ProviderTest>
        <Statistics />
      </ProviderTest>
    );

    expect(screen.getByText('Advanced Statistics')).toBeInTheDocument();
    expect(screen.getByText('Brand Recognition')).toBeInTheDocument();
    expect(screen.getByText('Detailed Records')).toBeInTheDocument();
    expect(screen.getByText('Fully Customizable')).toBeInTheDocument();
  });
});