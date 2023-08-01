import { type Page } from '@playwright/test';

export default class SearchPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    bayilikOptionLct = () => this.page.getByRole('link', { name: 'Bayilik Başvurusu ' });
    searchTextLct = () => this.page.getByText('Bulunan Sonuç Sayısı: 5');
   

    public async clickBayilikFormuOption() {
        await this.bayilikOptionLct().click();
    }
}


