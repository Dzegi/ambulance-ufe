import { newE2EPage } from '@stencil/core/testing';

describe('tj-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tj-ambulance-wl-list></tj-ambulance-wl-list>');

    const element = await page.find('tj-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
