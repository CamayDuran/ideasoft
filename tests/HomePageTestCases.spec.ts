import { test, expect } from '@playwright/test';
import Homepage from './support/POM/pages/homePage.page';
import SearchResult from './support/POM/pages/searchResult.page';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Ana sayfa', () => {
  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle("Ana Sayfa | Sunpet");
  });

  test('can display stations', async ({ page }) => {
    const homePage = new Homepage(page);
    const searchResultPage = new SearchResult(page);
    await homePage.clickAcceptAll();
    await homePage.selectStateAndDistrict('İstanbul');
    await homePage.clickGoruntuleBtn();
    await expect(page).toHaveURL(/istanbul/);
    await expect(page.getByRole('heading', { name: 'İSTANBUL', exact: true })).toHaveText('İSTANBUL');

    const searchResults = page.locator("xpath = //div[@class='dealer-card']");
    console.log(await searchResults.count());
    await expect(searchResults).toHaveCount(3);

    await searchResultPage.searchStations('İstanbul');
    const searchResultsFiltered = (searchResults).filter({ hasText: 'İSTANBUL ENERJİ SANAYİVE TİCARET A.Ş.' });
    await expect(searchResultsFiltered).toHaveCount(1);

  });

  test('can search other stations', async ({ browser, page }) => {
    const homePage = new Homepage(page);
    const searchResultPage = new SearchResult(page);
    browser.newContext();
    await homePage.clickAcceptAll();
    await homePage.selectStateAndDistrict('İstanbul');
    await homePage.clickGoruntuleBtn();
    await page.waitForTimeout(2000);
    await searchResultPage.seeOtherStations(4);

  });

});

test.afterEach(async ({ page }) => {
  console.log('Test execution is done');
  await page.close();
});

