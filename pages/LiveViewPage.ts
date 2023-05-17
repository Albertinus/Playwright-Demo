

import { Page, expect } from "@playwright/test"
import { color } from 'pengrape'

const randomColor = color({ format: 'hex' })

export default class LiveViewPage {


  constructor(public page: Page) {

  }


  async enterAdminLogin(adminEmail: string, adminPassword: string) {
    await this.page.locator('input#email').type(adminEmail)
    await this.page.locator('input#password').type(adminPassword)
    await this.page.getByRole('button', { name: 'Sign In' }).click();
  }

  a

  async linksLocators() {
    await this.page.locator('.kn-button.is-primary').first()

  }

  async customerColumn() {
    await this.page.locator('.kn-link.kn-link-page')

  }

  async clickInventoryTabBtn() {
    await this.page.click('[data-kn-slug="#inventory2"]')

  }

  async clickFiltersBtn() {
    await this.page.locator('.kn-filters-nav').click()
  }


  async filterSelect() {
    await this.page.locator('.field.select')

  }


  async clickFilterApplyButton() {
    await this.page.click('#kn-submit-filters')
    await this.page.waitForTimeout(5000)
  }


  async reorderColumn() {
    await this.page.locator('.kn-table-table  td:nth-child(8)').allTextContents()

  }

  async clickLiveButton() {

    const liveButton = this.page.locator('.accessMenu_directLink')
    await liveButton.evaluate((element: HTMLElement) => {
      element.removeAttribute('target')
    })
    await liveButton.click()
  }

  async fillInventoryName() {
    const searchInput = this.page.getByPlaceholder('search by keyword')
    await searchInput.fill('Brazil Santos - Ground (5 lb)')
    await searchInput.press('Enter')

  }

  async selectReorder() {

    const liveSelectorInput = this.page.locator('.field.select')
    await liveSelectorInput.selectOption({ label: 'Needs Re-Order' })

  }


  async logOut() {
    await this.page.getByRole('link', { name: 'Log Out' }).first().click();
  }

}