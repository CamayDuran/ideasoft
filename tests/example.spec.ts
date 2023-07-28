import { test, expect } from '@playwright/test';
import Homepage from './support/POM/pages/Homepage.page';


test('has title', async ({ page }) => {
  const homePage = new Homepage(page);
  await homePage.goTo();
  await expect(page).toHaveTitle("Ana Sayfa | Sunpet");
  await homePage.goTo();  
  await homePage.clickAcceptAll();
  await homePage.selectStateAndDistrict();
  await homePage.clickGoruntuleBtn();
  await expect(page).toHaveURL(/agri/);
  await page.pause();
});


