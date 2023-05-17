import { Page } from "@playwright/test"

export default class RecordsPage {


    constructor(public page: Page) {

    }


    async clickWarehouseInventoryRecord() {
        await this.page.locator('[content="View Warehouse Inventory records"]').click()

    }


    async clickaddFilterButton() {
        await this.page.locator('.kn-filters-nav').click()

    }


    async inputFilterProcess() {
        const selectorInput = this.page.locator('[data-cy="field-list-field"]')
        await selectorInput.selectOption({ label: 'Needs Re-Order' })
    }


    async selectDropDown() {
        const dropdownSelector = this.page.locator('[data-cy="dropdown-select"]')
        await dropdownSelector.selectOption({ value: 'true' })
    }

    async saveFilterBtn() {
        await this.page.locator('[type="submit"]').first().click({ force: true })
        await this.page.waitForTimeout(5000)
    }


}
