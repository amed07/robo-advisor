import { FlaskMaterialPage } from './app.po';

describe('flask-material App', function() {
  let page: FlaskMaterialPage;

  beforeEach(() => {
    page = new FlaskMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
