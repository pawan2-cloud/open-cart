import { test } from "playwright/test";
import { HeaderLinks } from "../page/headerLinks";
import { LoginPage } from "../page/loginPage";

test.describe("User login", () => {
  let headerLinks;
  let loginPage;
  test.beforeEach(async({page})=>{
    headerLinks=new HeaderLinks(page);
    loginPage=new LoginPage(page);
  });

  test('verify that login functionalty work with the given details',async()=>{
    await headerLinks.goToPage();
    await headerLinks.clickOnMyAccount();
  })
});
