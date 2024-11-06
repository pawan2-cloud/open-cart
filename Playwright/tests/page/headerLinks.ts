import { expect } from "playwright/test";
import { Action } from "./action";
const pom = {
  myAccount: `a[title="My Account"]`,
  register:`a:has-text("Register")`,
  registerPageHeading:`#content h1`

};

export class HeaderLinks extends Action {
  async clickOnMyAccount() {
    await this.clickElement(pom.myAccount);
  }

  async clickOnRegister(){
    await this.clickElement(pom.register);
    await expect(this.page.locator(pom.registerPageHeading)).toBeVisible();
  }


}
