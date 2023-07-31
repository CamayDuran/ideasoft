import { type Page } from '@playwright/test';

export default class SearchResult {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    searchLct = () => this.page.getByPlaceholder('İstasyon Ara');
    searchResults = () => this.page.locator('.dealer-card');
    searchResultsFiltered = () => this.searchResults().filter({ hasText: 'İSTANBUL ENERJİ SANAYİVE TİCARET A.Ş.' });
    headingTitle = () => this.page.locator('.list-title');


    public async searchStations(elementName: string) {
        await this.searchLct().fill(elementName);
    }

    public async seeOtherStations(indexNumber: number) {
        const otherStatesLct = await this.page.locator('.content-item > ul >li').all();
        await otherStatesLct[indexNumber].click();
    }


}