import { newSpecPage } from '@stencil/core/testing';
import { cv1AmbulanceWlList } from '../cv1-ambulance-wl-list';

describe('cv1-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [cv1AmbulanceWlList],
      html: `<cv1-ambulance-wl-list></cv1-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as cv1AmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
