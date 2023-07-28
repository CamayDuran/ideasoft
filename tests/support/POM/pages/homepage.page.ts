import { expect, Page } from '@playwright/test';

export default class Homepage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goTo() {
        await this.page.goto('/');
    }

    public async clickAcceptAll() {
        const acceptAllBtnLct = this.page.getByRole('button', { name: 'Tümünü Onayla' });
        await acceptAllBtnLct.click();
    }

    public async selectStateAndDistrict(){
       const ilLocator =  this.page.getByText('İl Seçinizİl Seçiniz');
       const ilceLocator = this.page.getByRole('option', { name: 'Ağrı' })
       await ilLocator.click();
       await ilceLocator.click();
    }

    public async clickGoruntuleBtn(){
        const goruntuleBtnLct = this.page.getByRole('button', { name: 'Görüntüle' });
        await goruntuleBtnLct.click();

    }


}


