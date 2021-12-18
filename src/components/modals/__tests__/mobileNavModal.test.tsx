import { render, screen } from '@testing-library/react';
import { ProviderTest } from '../../../tests/test-utils';

import MobileNavModal from '../mobileNavModal';

describe('Hero', () => {
  it('should display correctly', () => {
    const hideModal = jest.fn()
    render(
      <ProviderTest>
        <MobileNavModal
          showModal={true}
          hideModal={hideModal}
        />
      </ProviderTest>
    );

    expect(screen.getByTestId('mobile-nav-modal')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
});