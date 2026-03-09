import { newE2EPage } from '@stencil/core/testing';

describe('tj-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tj-ambulance-wl-app></tj-ambulance-wl-app>');

    const element = await page.find('tj-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
