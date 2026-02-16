import { newSpecPage } from '@stencil/core/testing';
import { cv1AmbulanceWlList } from '../cv1-ambulance-wl-list';

describe('cv1-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [cv1AmbulanceWlList],
      html: `<cv1-ambulance-wl-list></cv1-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <cv1-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cv1-ambulance-wl-list>
    `);
  });
});
