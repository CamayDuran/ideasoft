import { test as base, expect } from '@playwright/test';
import Rezervasyonpage from '../PageObjects/rezervasyon.page';

interface PageObjects {
    rezervasyonPage: Rezervasyonpage;
}

export const test = base.extend<PageObjects>({
    rezervasyonPage: async ({ page, context }, use) => {
        await use(new Rezervasyonpage(page));
    },
    
   
});
export { expect } from '@playwright/test';