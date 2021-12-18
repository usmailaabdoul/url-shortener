import { render, screen } from '@testing-library/react';
import { ProviderTest } from '../../../tests/test-utils';

import Hero from '../hero';

describe('Hero', () => {
  it('should display correctly', () => {
    render(
      <ProviderTest>
        <Hero />
      </ProviderTest>
    );

    expect(screen.getByText('More than just shorter links')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });
});