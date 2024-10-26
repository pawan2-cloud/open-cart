import { expect } from "playwright/test";
import { Action } from "./action";

const pom = {
  firstName: `#input-firstname`,
  lastName: `#input-lastname`,
  email: `#input-email`,
  telephone: `#input-telephone`,
  password: `#input-password`,
  confirmPassword: `#input-confirm`,
  subscribeYes:`.radio-inline input[value="1"]`,
  agreeCheckbox:`a.agree +input[value="1"]`,
  continueBtn:`input[value="Continue"]`,
  accountCreatedHeading:`#content h1`
};

export class RegisterationPage extends Action {
  async fillUserDetailsAndSubmit(userDetails) {
    await this.fillElement(pom.firstName, userDetails.firstName);
    await this.fillElement(pom.lastName, userDetails.lastName);
    await this.fillElement(pom.email, userDetails.email);
    await this.fillElement(pom.telephone, userDetails.phone);
    await this.fillElement(pom.password, userDetails.password);
    await this.fillElement(pom.confirmPassword, userDetails.confirmPassword);
    await this.clickElement(pom.subscribeYes);
    await this.clickElement(pom.agreeCheckbox);
    await this.clickElement(pom.continueBtn);
  }

  async verifyUserCreation(){
    expect(await this.page.locator(pom.accountCreatedHeading).textContent()).toEqual("Your Account Has Been Created!");
  }
}
