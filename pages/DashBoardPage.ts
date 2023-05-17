import { Page } from "@playwright/test"

export default class DashBoardPage {


    constructor(public page: Page) {

    }



    async clickWarehouseManager() {

        this.page.getByRole('link', { name: 'Warehouse Manager' }).click();
    }




}