import { render, screen } from '@testing-library/react';
import { ProviderTest } from '../../../tests/test-utils';

import ShortenUrlCard from '../shortenUrlCard';

describe('ShortenUrlCard', () => {
  it('should display correctly', () => {
    const shortenURL = jest.fn()
    const clearError = jest.fn()
    render(
      <ProviderTest>
        <ShortenUrlCard 
          shortenURL={shortenURL}
          loading={false}
          urlError={null}
          clearError={clearError}
        />
      </ProviderTest>
    );

    expect(screen.getByTestId('shorten-url-form')).toBeInTheDocument();
  });

  it('should display error message', () => {
    const shortenURL = jest.fn()
    const clearError = jest.fn()
    render(
      <ProviderTest>
        <ShortenUrlCard 
          shortenURL={shortenURL}
          loading={false}
          urlError='Url has some errors'
          clearError={clearError}
        />
      </ProviderTest>
    );

    expect(screen.getByText('Url has some errors')).toBeInTheDocument();
  });
});