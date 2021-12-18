import {theme} from '../theme'

describe('Theme', () => {
  it('should contain proper color structure', () => {
    expect(theme.colors).toEqual(
      expect.objectContaining({
        primary_cyan: expect.any(String),
        primary_cyan_light: expect.any(String),
        primary_dark_violet: expect.any(String),
        secondary_red: expect.any(String),
        grayish_violet: expect.any(String),
      })
    );
  });

  it('should contain proper font', () => {
    expect(theme.font).toEqual(
      expect.objectContaining({
        primary: expect.any(String),
      })
    );
    expect(theme.font.primary).toEqual('Poppins');
  });

  it('should contain proper layouts', () => {
    expect(theme.layouts).toEqual(
      expect.objectContaining({
        mobile: expect.any(String),
        desktop: expect.any(String),
      })
    );

    expect(theme.layouts).toEqual({
      mobile: '375px',
      desktop: '1440px',
    });
  });
});
