import { newSpecPage } from '@stencil/core/testing';
import { TjAmbulanceWlApp } from '../tj-ambulance-wl-app';

describe('tj-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [TjAmbulanceWlApp],
      html: `<tj-ambulance-wl-app base-path="/"></tj-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("tj-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [TjAmbulanceWlApp],
      html: `<tj-ambulance-wl-app base-path="/ambulance-wl/"></tj-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("tj-ambulance-wl-list");
  });
});
