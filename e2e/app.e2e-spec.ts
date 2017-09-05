import { PiperChatPage } from './app.po';

describe('piper-chat App', () => {
  let page: PiperChatPage;

  beforeEach(() => {
    page = new PiperChatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
