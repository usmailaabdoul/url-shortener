import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProviderTest } from '../../../tests/test-utils';
import FlatButton from '../flatButton';
import PrimaryButton from '../primaryButton';
import SecondaryButton from '../secondaryButtton';
import IconButton from '../iconButton';
import IconButtons from '../iconButtons';

describe('Buttons', () => {
  it('FlatButton should display correctly', () => {
    const onClick = jest.fn()
    render(
      <ProviderTest>
        <FlatButton 
          label="flatbutton"
          onClick={onClick}
          link="/"
        />
      </ProviderTest>
    );
    expect(screen.getByText('flatbutton')).toBeInTheDocument();
    userEvent.click(screen.getByText('flatbutton'));
    expect(onClick).toBeCalled();
  });

  it('IconButton should display correctly', () => {
    const onClick = jest.fn()
    render(
      <ProviderTest>
        <IconButton 
          icon="menu"
          onClick={onClick}
        />
      </ProviderTest>
    );
    expect(screen.getByTestId('icon-button')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('icon-button'));
    expect(onClick).toBeCalled();
  });

  it('IconButtons should display correctly', () => {
    render(
      <ProviderTest>
        <IconButtons />
      </ProviderTest>
    );
    expect(screen.getByTestId('icon-buttons')).toBeInTheDocument();
  });

  it('PrimaryButton should display correctly', () => {
    const onClick = jest.fn()
    render(
      <ProviderTest>
        <PrimaryButton 
          label="PrimaryButton"
          onClick={onClick}
          link="/"
        />
      </ProviderTest>
    );
    expect(screen.getByText('PrimaryButton')).toBeInTheDocument();
    userEvent.click(screen.getByText('PrimaryButton'));
    expect(onClick).toBeCalled();
  });

  it('SecondaryButton should display correctly', () => {
    const onClick = jest.fn()
    render(
      <ProviderTest>
        <SecondaryButton 
          label="SecondaryButton"
          onClick={onClick}
        />
      </ProviderTest>
    );

    expect(screen.getByText('SecondaryButton')).toBeInTheDocument();
    userEvent.click(screen.getByText('SecondaryButton'));
    expect(onClick).toBeCalled();
  });

  it('SecondaryButton loader should display correctly', () => {
    const onClick = jest.fn()
    render(
      <ProviderTest>
        <SecondaryButton 
          label="SecondaryButton"
          onClick={onClick}
          loading={true}
        />
      </ProviderTest>
    );
    
    expect(screen.queryByText('SecondaryButton')).not.toBeInTheDocument();
  });
});
