import { render, screen } from '@testing-library/react';
import { ProviderTest } from '../../../tests/test-utils';

import BodyCard from '../bodyCard';

describe('BodyCard', () => {
  it('should display correctly', () => {
    render(
      <ProviderTest>
        <BodyCard 
          icon="brush"
          title="BodyCard title"
          description='BodyCard description'
        />
      </ProviderTest>
    );
    expect(screen.getByText('BodyCard title')).toBeInTheDocument();
    expect(screen.getByText('BodyCard description')).toBeInTheDocument();
  });
});