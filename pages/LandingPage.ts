
import { Page } from "@playwright/test"

export default class LandingPage {


    constructor(public page: Page) {

    }


    async clickWarehouseManager() {
        await this.page.getByRole('link', { name: 'Warehouse Manager' }).click();
    }


    async clickPagesTab() {

        await this.page.click('[data-cy="nav-pages"]')

    }

    async clickRecordsTab() {

        await this.page.click('[data-cy="nav-records"]')

    }

    async clickEditView() {

        await this.page.click('[content="Click to edit this view"]')

    }


    async clickRulesButton() {

        await this.page.click('[data-cy="Rules"]')

    }




}







