import { render, screen } from '@testing-library/react';
import { ProviderTest } from '../../tests/test-utils';

import Home from '../home';

describe('Footer', () => {
  it('should display correctly', () => {
    render(
      <ProviderTest>
        <Home />
      </ProviderTest>
    );

    expect(screen.getByTestId('home')).toBeInTheDocument();
    expect(screen.getByText('More than just shorter links')).toBeInTheDocument();
  });
});