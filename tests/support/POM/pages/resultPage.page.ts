import { type Page } from '@playwright/test';

export default class ResultPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    tableRows = () => this.page.locator('.primary-table tbody tr')
    title = () => this.page.getByRole('heading', { name: 'Akaryakıt Fiyatları' }).locator('span');
    akaryakitBtnLct = () => this.page.getByRole('link', { name: ' Akaryakıt Fiyatları' });


    public async seeOtherStations(indexNumber: number) {
        const otherStatesLct = await this.page.locator('.content-item > ul >li').all();
        await otherStatesLct[indexNumber].click();
    }




}