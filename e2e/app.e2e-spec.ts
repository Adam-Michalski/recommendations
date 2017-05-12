import { RecommendationsPage } from './app.po';

describe('recommendations App', () => {
  let page: RecommendationsPage;

  beforeEach(() => {
    page = new RecommendationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
