import { test, expect } from '@playwright/test';
import Homepage from './support/POM/pages/Homepage.page';


test('has title', async ({ page }) => {
  const homePage = new Homepage(page);
  await homePage.goTo();
  await expect(page).toHaveTitle("Ana Sayfa | Sunpet");
});

test('can display stations', async ({ page }) => {
  const homePage = new Homepage(page);
  await homePage.goTo();
  await homePage.clickAcceptAll();
  await homePage.selectStateAndDistrict();
  await homePage.clickGoruntuleBtn();
  await expect(page).toHaveURL(/agri/);

  console.log(await page.locator("xpath = //div[@class='dealer-card']").count());
  await expect(page.locator("xpath = //div[@class='dealer-card']")).toHaveCount(4);
  await page.pause();
});


