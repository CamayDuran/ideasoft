import { test, expect } from './fixtures/basePage';
const testData = JSON.parse(JSON.stringify(require('./utils/TeslimatBilgileriTestData.json')));

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});
  
  test('Login with correct email and passwords', async ({ rezervasyonPage}) => {
    await expect(async () => {
      await rezervasyonPage.clickHeaderErkek();
      await rezervasyonPage.clickproduct();
      await rezervasyonPage.page.waitForTimeout(5000);
      await rezervasyonPage.clickproductbeden();
      await rezervasyonPage.page.waitForTimeout(5000);
      await rezervasyonPage.clickSepeteEkle();
      await rezervasyonPage.clickSepete();
      await rezervasyonPage.clickSepetiGoruntule();
      await rezervasyonPage.clickAlisverisiTamamla();
      await rezervasyonPage.clickUyeOlmadanDevamEt();
      await rezervasyonPage.elementTeslimatBasarili();
      await rezervasyonPage.fillAd(testData.validAd);
      await rezervasyonPage.fillSoyad(testData.validSoyad);
      await rezervasyonPage.fillEposta(testData.validEmail);
      await rezervasyonPage.fillTelefon(testData.validTelefon);
      await rezervasyonPage.clickUlke();
      await rezervasyonPage.clickTurkiye();
      await rezervasyonPage.clickSehir();
      await rezervasyonPage.fillsehir(testData.validSehir);
      await rezervasyonPage.clickAdanaLct();
      await rezervasyonPage.clickIlcelct();
      await rezervasyonPage.clickCeyhanLct();
      await rezervasyonPage.fillPosta(testData.validPosta);
      await rezervasyonPage.fillAdres(testData.validAdres);
      await rezervasyonPage.clickUyeOlDevamEt();
      await rezervasyonPage.clickAlisverisiTamamla();
      await rezervasyonPage.fillKartSahibiIsim(testData.validKartIsim);
      await rezervasyonPage.page.waitForTimeout(5000);
      await rezervasyonPage.clickKartno();
      await rezervasyonPage.fillKartNo(testData.validKartNo);
      await rezervasyonPage.clickAyDropdown();
      await rezervasyonPage.clickAy6();
      await rezervasyonPage.clickYilDropdown();
      await rezervasyonPage.clickYil2026();
      await rezervasyonPage.clickCVV();
      await rezervasyonPage.fillCVV(testData.validCVV);
      await rezervasyonPage.clickTekCekimBtn();
      await rezervasyonPage.clickSozlesme1();
      await rezervasyonPage.clickSozlesme2();
      await rezervasyonPage.clickOdemeYap();
      await rezervasyonPage.fillSmscode(testData.validSms);
      await rezervasyonPage.clickSubmit();
      await rezervasyonPage.elementSiparisBasarili();
     

      
    }).toPass();
  })
  

test.afterEach(async ({ page }) => {
  console.log('Test execution is done');
  await page.close();
});
