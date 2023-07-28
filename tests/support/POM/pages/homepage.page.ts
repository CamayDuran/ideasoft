import { expect, type Locator, type Page } from '@playwright/test';

export default class Homepage {
    page: Page;
    acceptAllBtnLct: Locator;
    ilLocator: Locator;
    goruntuleBtnLct: Locator;

    constructor(page: Page) {
        this.page = page;
        this.acceptAllBtnLct = page.getByRole('button', { name: 'Tümünü Onayla' });
        this.ilLocator = page.getByText('İl Seçinizİl Seçiniz');
        this.goruntuleBtnLct = page.getByRole('button', { name: 'Görüntüle' });
    }

    public async clickAcceptAll() {
        await this.acceptAllBtnLct.click();
    }

    public async selectStateAndDistrict(elementName: string) {
        await this.ilLocator.click();
        const ilceLocator = this.page.getByRole('option', { name: elementName }).click();

    }

    public async clickGoruntuleBtn() {
        await this.goruntuleBtnLct.click();

    }


}


