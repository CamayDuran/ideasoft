import { type Page } from '@playwright/test';

export default class Homepage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    acceptAllBtnLct = () => this.page.getByRole('button', { name: 'Tümünü Onayla' });
    ilLocator = () => this.page.getByText('İl Seçinizİl Seçiniz');
    goruntuleBtnLct = () => this.page.getByRole('button', { name: 'Görüntüle' });
    tumunuGorBtnLct = () => this.page.getByRole('link', { name: 'Tümünü Gör ' });
    searchTextFieldLct = () => this.page.getByPlaceholder('Arama');


    public async clickAcceptAll() {
        await this.acceptAllBtnLct().click();
    }

    public async selectStateAndDistrict(elementName: string) {
        await this.ilLocator().click();
        const ilceLocator = this.page.getByRole('option', { name: elementName }).click();
    }

    public async clickGoruntuleBtn() {
        await this.goruntuleBtnLct().click();
    }

    public async clickTumunuGorBtn() {
        const [newtab] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.tumunuGorBtnLct().click(),
        ]);
        return newtab;
        // await this.tumunuGorBtnLct().click();
    }

    public async clickSearchBtn() {
        const all = await this.page.locator('.search-btn').all();
        await all[1].click();
    }

    public async search() {
        await this.searchTextFieldLct().fill('Bayilik Formu');
        await this.searchTextFieldLct().press('Enter');

    }


}


