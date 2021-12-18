import { render, screen } from '@testing-library/react';
import { ProviderTest } from '../../../tests/test-utils';

import UrlCard from '../urlCard';

describe('UrlCard', () => {
  it('should display correctly', () => {
    interface LinkProps {
      full_short_link: string;
      original_link: string;
    }

    const link: LinkProps = {
      full_short_link: 'http://example',
      original_link: 'http://example.com'
    } 
    render(
      <ProviderTest>
        <UrlCard 
          link={link}
        />
      </ProviderTest>
    );

    expect(screen.getByText('http://example')).toBeInTheDocument();
  });
});