import { test, expect } from '@playwright/test';
import Homepage from './support/POM/pages/homePage.page';
import SearchResult from './support/POM/pages/searchResult.page';
import ResultPage from './support/POM/pages/resultPage.page';
import SearchPage from './support/POM/pages/searchPage.page';
import ApplicationPage from './support/POM/pages/applicationPage.page';
import ContactFormPage from './support/POM/pages/contactFormPage.page';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('HomePage Test Cases', () => {
  test('Has Correct Title', async ({ page }) => {
    await expect(page).toHaveTitle("Ana Sayfa | Sunpet");
  });

  test('Can Display Stations', async ({ page }) => {
    await expect(async () => {
      const homePage = new Homepage(page);
      const searchResultPage = new SearchResult(page);

      await test.step('Accept cookies', async () => {
        await homePage.clickAcceptAll();
      })

      await test.step('Select Istanbul and click show button', async () => {
        await homePage.selectStateAndDistrict('İstanbul');
        await homePage.clickGoruntuleBtn();
      })

      await test.step('Assert that the URL and title are correct', async () => {
        await expect(page).toHaveURL(/istanbul/);
        await expect(searchResultPage.headingTitle()).toHaveText('İSTANBUL');
      })

      await test.step('Assert that the search result count is correct', async () => {
        console.log(await searchResultPage.searchResults().count());
        await expect(searchResultPage.searchResults()).toHaveCount(3);
      })

      await test.step('Search a station in Istanbul and assert result count is correct', async () => {
        await searchResultPage.searchStations('İstanbul');
        await expect(searchResultPage.searchResultsFiltered()).toHaveCount(1);
      })

      await test.step('Can click Antalya and see its stations', async () => {
        searchResultPage.seeOtherStations(4);
        await expect(searchResultPage.searchResults()).toHaveCount(9);
      })
    }).toPass();
  });

  test('Click "See All" button on HomePage and assert that the page loads as expected', async ({ page, context }) => {
    await expect(async () => {
      const homePage = new Homepage(page);

      await test.step('Accept cookies', async () => {
        await homePage.clickAcceptAll();
      })

      const newTab = await test.step('Click "See All" button', async () => {
        //const pagePromise = context.waitForEvent('page');
        return await homePage.clickTumunuGorBtn();
        //const newPage = await pagePromise;
        // await newPage.waitForLoadState();
        // await expect(newPage.locator('.primary-table tbody tr')).toHaveCount(26);
      })

      await test.step('Bring the results on table', async () => {
        const resultPage = new ResultPage(newTab);
        //await expect(newTab.locator('.primary-table tbody tr')).toHaveCount(26);
        await expect(resultPage.tableRows()).toHaveCount(26);
      })
    }).toPass();
  })

  test('Search "Bayilik Başvuru Formu" and send application form', async ({ page }) => {
    await expect(async () => {
      const homePage = new Homepage(page);
      const searchPage = new SearchPage(page);
      const applicationPage = new ApplicationPage(page);

      await test.step('Accept cookies', async () => {
        await homePage.clickAcceptAll();
      })

      await test.step('Click search button and search "Bayilik Formu"', async () => {
        await homePage.clickSearchBtn();
        await homePage.search();
      })

      await test.step('Assert that the result text displayed as expected', async () => {
        await expect(searchPage.searchTextLct()).toHaveText('Bulunan Sonuç Sayısı: 5');
      })

      await test.step('Click Bayilik Başvurusu option', async () => {
        await searchPage.clickBayilikFormuOption();
      })

      await test.step('Assert that Bayilik Başvurusu page loaded as expected', async () => {
        await expect(page).toHaveURL(/bayilik-basvurusu/);
        await expect(page).toHaveTitle('Bayilik Başvurusu | Sunpet');
      })

      await test.step('Fill and send the application form', async () => {
        await applicationPage.fillFormInformations();
        await applicationPage.clickSendButton();
      })

      await test.step('Assert that application form is successfully sent', async () => {
        await expect(applicationPage.successTxtLct()).toHaveText('Form başarıyla gönderildi');
      })
    }).toPass();
  })

  test.only('Send contact form', async ({ page }) => {
    await expect(async () => {
      const homePage = new Homepage(page);
      const contactFormPage = new ContactFormPage(page);

      await test.step('Accept cookies', async () => {
        await homePage.clickAcceptAll();
      })

      await test.step('Hover to "İletişim" and click "Öneri ve Şikayetler" button ', async () => {
        await homePage.clickContactBtn();
      })

      await test.step('Fill and send the contact form ', async () => {
        await contactFormPage.fillFormInformations();
        await page.pause();
        await contactFormPage.clickSendButton();
      })

      await test.step('Assert that application form is successfully sent', async () => {
        await expect(contactFormPage.successTxtLct()).toHaveText('Form başarıyla gönderildi');
      })
    }).toPass();




  })


});

test.afterEach(async ({ page }) => {
  console.log('Test execution is done');
  await page.close();
});

