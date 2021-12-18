import { render, screen } from '@testing-library/react';
import { ProviderTest } from '../../../tests/test-utils';

import UserAction from '../userAction';

describe('UserAction', () => {
  it('should display correctly', () => {
    render(
      <ProviderTest>
        <UserAction />
      </ProviderTest>
    );

    expect(screen.getByText('Boost your links today')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });
});