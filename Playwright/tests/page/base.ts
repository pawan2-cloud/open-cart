import type { Page } from "playwright";

export abstract class Base {
  protected page: Page;
  /**
   * Constructor
   * @param page Page Context from Playwright
   */
  constructor(page: Page) {
    this.page = page;
  }

  async goToPage(endpoint = "/ui") {
    await this.page.goto(endpoint);
    await Promise.all([
      this.page.waitForLoadState("networkidle"),
      this.page.waitForLoadState("domcontentloaded"),
      this.page.waitForLoadState("load"),
    ]);
  }
}
