/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import { ProviderTest } from '../../../tests/test-utils';

import Footer from '../footer';

describe('Footer', () => {
  it('should display correctly', () => {
    render(
      <ProviderTest>
        <Footer />
      </ProviderTest>
    );

    expect(document.getElementsByClassName('logo')[0]).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
  });
});