import { Page } from "@playwright/test"

export default class BuilderPage {


    constructor(public page: Page) {

    }


    async clickAdminInventory() {
        await this.page.getByText('Admin > Inventory').click()
    }


    async clickInventory() {
        await this.page.getByText('Inventory', { exact: true }).first().click()

    }

    async clickblur() {
        await this.page.click('.blur')

    }

    async clickOnHandEditView() {
        await this.page.getByRole('cell', { name: 'On-Hand' }).locator('div').nth(2).click();
    }


    async clickOnHandEditView2() {
        await this.page.getByRole('cell', { name: 'On-Hand' }).locator('div').nth(3).click()
    }



}