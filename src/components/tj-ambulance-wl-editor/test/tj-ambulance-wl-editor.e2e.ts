import { newE2EPage } from '@stencil/core/testing';

describe('tj-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tj-ambulance-wl-editor></tj-ambulance-wl-editor>');

    const element = await page.find('tj-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
