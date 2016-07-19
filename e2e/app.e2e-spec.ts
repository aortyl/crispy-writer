import { CrispyCorpseAppPage } from './app.po';

describe('crispy-corpse-app App', function() {
  let page: CrispyCorpseAppPage;

  beforeEach(() => {
    page = new CrispyCorpseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
