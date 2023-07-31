import { type Page } from '@playwright/test';

export default class SearchPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    bayilikOptionLct = () => this.page.getByRole('link', { name: 'Bayilik Başvurusu ' });
    searchTextLct = () => this.page.getByText('Bulunan Sonuç Sayısı: 5');
    adLocator = () => this.page.getByLabel('Adınız', { exact: true });
    soyadLocator = () => this.page.getByLabel('Soyadınız');
    emailLocator = () => this.page.getByLabel('E-mail Adresiniz');
    telefonLocator = () => this.page.getByLabel('Telefon Numaranız');
    ilLocator = () => this.page.getByText('İl Seçinizİl Seçiniz');
    ilLocator1 = () => this.page.getByRole('option', { name: 'İSTANBUL ANADOLU' });
    ilceLocator = () => this.page.getByText('İlçe Seçinizİlçe Seçiniz');
    ilceLocator1 = () => this.page.getByRole('option', { name: 'ATAŞEHİR' });
    acikAdresLocator = () => this.page.getByPlaceholder('Açık Adres');
    firmaAdiLocator = () => this.page.getByLabel('Firma Adı');
    istasyonDurumuLocator = () => this.page.getByLabel('İstasyon Durumu');
    checkBoxLct = () => this.page.locator('.checkmark');
    sendBtnLocator = () => this.page.getByRole('button', { name: 'Gönder' });
    successTxtLct = () => this.page.getByText('Form başarıyla gönderildi');


    public async clickBayilikFormuOption() {
        await this.bayilikOptionLct().click();
    }

    public async fillFormInformations() {
        await this.adLocator().fill('Test');
        await this.soyadLocator().fill('Test');
        await this.emailLocator().fill('testest@yopmail.com');
        await this.telefonLocator().type('5891734433')
        await this.ilLocator().click()
        await this.ilLocator1().click();
        await this.ilceLocator().click();
        await this.ilceLocator1().click();
        await this.acikAdresLocator().fill('Bu bir testtir. Lütfen dikkate almayın.');
        await this.firmaAdiLocator().fill('Test');
        await this.istasyonDurumuLocator().fill('Test');
        await this.checkBoxLct().check();
    }

    public async clickSendButton() {
        await this.sendBtnLocator().click();
    }



}


