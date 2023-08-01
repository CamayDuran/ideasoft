import { expect, type Page } from '@playwright/test';

export default class ContactFormPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    adLocator = () => this.page.getByLabel('Adınız', { exact: true });
    soyadLocator = () => this.page.getByLabel('Soyadınız');
    emailLocator = () => this.page.getByLabel('E-mail Adresiniz');
    telefonLocator = () => this.page.getByLabel('Telefon Numaranız');
    plakaLocator = () => this.page.getByLabel('Plaka');
    istasyonAdiLocator = () => this.page.getByLabel('İstasyon Adı');
    konuSecinLocator = () => this.page.getByText('Konu SeçinizKonu Seçiniz');
    konuOptions = () => this.page.getByRole('option', { name: 'Genel' });
    konuBasligiLocator = () => this.page.getByLabel('Konu Başlığı');
    aciklamaLocator = () => this.page.getByPlaceholder('Açıklama');
    checkBoxLct = () => this.page.locator('.checkmark');
    sendBtnLocator = () => this.page.getByRole('button', { name: 'Gönder' });
    successTxtLct = () => this.page.getByText('Form başarıyla gönderildi');


    public async fillFormInformations() {
        await this.adLocator().fill('Test');
        await this.soyadLocator().fill('Test');
        await this.emailLocator().fill('testest@yopmail.com');
        await this.telefonLocator().type('5891734433')
        await this.plakaLocator().type("34 TST 3244")
        await this.istasyonAdiLocator().fill('Test');
        await this.konuSecinLocator().click();
        await this.konuOptions().click();
        await this.konuBasligiLocator().fill('Test');
        await this.aciklamaLocator().fill('Bu bir testtir. Lütfen dikkate almayınız.');
        await this.checkBoxLct().check();
    }

    public async clickSendButton() {
        await this.sendBtnLocator().click();
    }




}