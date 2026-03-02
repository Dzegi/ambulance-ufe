import { newSpecPage } from '@stencil/core/testing';
import { TjAmbulanceWlEditor } from '../tj-ambulance-wl-editor';

describe('tj-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TjAmbulanceWlEditor],
      html: `<tj-ambulance-wl-editor></tj-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <tj-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tj-ambulance-wl-editor>
    `);
  });
});
