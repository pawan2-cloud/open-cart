import { test } from "playwright/test";
import { NavigationController } from "../page/navigationController";

test.describe("Add tablet in cart", () => {
  let navigationController;
  test.beforeEach(async ({ page }) => {
    navigationController = new NavigationController(page);
  });
  test("Verify User Can Successfully Add a Tablet to the Cart and Confirm Its Displayed in the Cart Section", async () => {
    await navigationController.goToPage();
    await navigationController.navigateToTabletPage();
  });
});
