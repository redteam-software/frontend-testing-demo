import {Locator, Page} from "@playwright/test";

export class HomePage {
  readonly browseMenu: Locator;
  readonly allBoardGamesLink: Locator;
  readonly searchInput: Locator;
  readonly firstSearchOption: Locator;

  constructor(private page: Page) {
    this.browseMenu = page.getByRole('button', { name: 'Browse' });
    this.allBoardGamesLink = page.getByRole('link', { name: 'All boardgames' });
    this.searchInput = page.getByPlaceholder('Search');
    this.firstSearchOption = this.searchInput.locator('+ [role="listbox"] button').first();
  }

  async goto() {
    await this.page.goto('https://boardgamegeek.com');
  }

  async openBrowseMenu() {
    await this.browseMenu.click();
  }

  async searchForGame(game: string) {
    await this.searchInput.focus();
    await this.searchInput.fill(game);
    await this.firstSearchOption.click();
  }
}