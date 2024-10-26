import { test } from "playwright/test";
import { createUser, cleanUpUser } from "../scripts/createUser";
import { HeaderLinks } from "../page/headerLinks";
import { RegisterationPage } from "../page/registerationPage";

test.describe("User registeration", () => {
  let headerLinks;
  let registerationPage;
  test.beforeAll( () => {
    createUser();
  });
  test.beforeEach(async ({ page }) => {
    headerLinks = new HeaderLinks(page);
    registerationPage = new RegisterationPage(page);
  });
  test("verify that User Registration Functionality work with given details", async () => {
    const users = require("../fixtures/user.json");
    const [user] = users.slice(-1);
    await headerLinks.goToPage();
    await headerLinks.clickOnMyAccount();
    await headerLinks.clickOnRegister();
    await registerationPage.fillUserDetailsAndSubmit(user);
    await registerationPage.verifyUserCreation();
  });

  test.afterAll(async () => {
    await cleanUpUser();
  });
});
