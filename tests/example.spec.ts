import { test, expect } from '@playwright/test';

import DashBoardPage from '../pages/DashBoardPage';
import LiveViewPage from '../pages/LiveViewPage';
import LandingPage from '../pages/LandingPage';
import BuilderPage from '../pages/BuilderPage';
import DisplayRules from '../pages/DisplayRules';
import RecordsPage from '../pages/RecordsPage';



const url = 'https://builder.knack.com'
const adminEmail = 'admin@test.com'
const adminPassword = 'test'


test.beforeEach(async ({ page }) => {
    const dashboard = new DashBoardPage(page)

    await page.goto(url);
    await dashboard.clickWarehouseManager();

});

test('Test One: Icon Color for Display Rules', async ({ page }) => {

    const liveView = new LiveViewPage(page)
    const landingPage = new LandingPage(page)
    const builderPage = new BuilderPage(page)
    const displayRules = new DisplayRules(page)

    await landingPage.clickPagesTab();

    await builderPage.clickAdminInventory()
    await builderPage.clickInventory();
    await builderPage.clickblur();
    await builderPage.clickOnHandEditView();
    await builderPage.clickOnHandEditView2();

    await displayRules.countRules();
    await displayRules.selectColorInput();
    await displayRules.selectColorPicker();
    await displayRules.saveRuleButton();
    await displayRules.editView();

    await liveView.clickLiveButton();
    await liveView.enterAdminLogin(adminEmail, adminPassword);
    await liveView.clickInventoryTabBtn();
    await liveView.fillInventoryName();
    await liveView.linksLocators();
    await liveView.fillInventoryName();
    await liveView.logOut();

});


test('Filtering Inventory', async ({ page }) => {
    const liveView = new LiveViewPage(page)
    const landingPage = new LandingPage(page)
    const recordsPage = new RecordsPage(page)

    await landingPage.clickRecordsTab();

    await recordsPage.clickWarehouseInventoryRecord();
    await recordsPage.clickaddFilterButton();
    await recordsPage.inputFilterProcess();
    await recordsPage.selectDropDown();
    await recordsPage.saveFilterBtn();

    const texts = await page.locator('.knTable.is-fullwidth.knTable--striped td:nth-child(13)').allTextContents()
    const arraySize = texts.length
    texts.forEach(element => {
        expect(element).toBe('Yes')
    })

    await liveView.clickLiveButton();
    await liveView.enterAdminLogin(adminEmail,adminPassword)
    await liveView.clickInventoryTabBtn();
    await liveView.clickFiltersBtn();
    await liveView.selectReorder();
    await liveView.clickFilterApplyButton();

    const liveTexts = await page.locator('.knTable.is-fullwidth.knTable--striped td:nth-child(13)').allTextContents()
    const decodedLiveTexts = liveTexts.map(element => element.replace(/\n/g, '').trim())
    for (let i = 0; i < (decodedLiveTexts.length - 1); i++) {
        expect(decodedLiveTexts[i]).toBe('Yes')
    }

    const liveArraySize = decodedLiveTexts.length - 1

    expect(liveArraySize).toBe(arraySize)



    
});





