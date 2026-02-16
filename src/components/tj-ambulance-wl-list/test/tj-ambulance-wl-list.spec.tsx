import { newSpecPage } from '@stencil/core/testing';
import { tjAmbulanceWlList } from '../tj-ambulance-wl-list';

describe('tj-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [tjAmbulanceWlList],
      html: `<tj-ambulance-wl-list></tj-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as tjAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
