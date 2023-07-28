import { type Locator, type Page } from '@playwright/test';

export default class SearchResult {
    page: Page;
    private searchLct: Locator;


    constructor(page: Page) {
        this.page = page;
        this.searchLct = this.page.getByPlaceholder('İstasyon Ara');
    }

    public async searchStations(elementName: string) {

        await this.searchLct.fill(elementName);
    }

    public async seeOtherStations(indexNumber: number) {

        const otherStatesLct = await this.page.locator('.content-item > ul >li').all();

        await otherStatesLct[indexNumber].click();

    }
}