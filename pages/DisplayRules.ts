import { Page, expect } from "@playwright/test"
import { color } from 'pengrape'

const randomColor = color({ format: 'hex' })

export default class DisplayRules {


    constructor(public page: Page) {

    }

    async editView() {
        await this.page.locator('[content="Click to edit this view"]').click()

    }

    async countRules() {
        const rules = this.page.locator('[data-cy="list-item"]')
        const rulesCount = await rules.count()
        expect(rulesCount).toBeGreaterThanOrEqual(0)
    }


    async rules() {
        await this.page.locator('[data-cy="list-item"]')


    }


    async selectColorInput() {
        await this.page.locator('.kn-colorInput_input').first().clear()


    }

    async saveRuleButton() {
        await this.page.locator('[data-cy="toolbox-save"]').click({ force: true })
    }


    async selectColorPicker() {
        await this.page.locator('.kn-colorPicker').first().type(randomColor)

    }
}