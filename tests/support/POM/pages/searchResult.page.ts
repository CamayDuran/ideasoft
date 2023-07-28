import { expect, type Locator, type Page } from '@playwright/test';

export default class SearchResult {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    searchLct = () => this.page.getByPlaceholder('İstasyon Ara');

    public async searchStations(elementName: string) {

        const searchLctt = await this.searchLct();
        await searchLctt.fill(elementName);
    }

    public async seeOtherStations(elementName: string) {


    }
}