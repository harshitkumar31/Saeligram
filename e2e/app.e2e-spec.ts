import { SaeligramPage } from './app.po';

describe('saeligram App', () => {
  let page: SaeligramPage;

  beforeEach(() => {
    page = new SaeligramPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
