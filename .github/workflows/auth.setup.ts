// auth.setup.ts
import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

  const url = 'https://builder.knack.com'
  await page.goto(url);
  await page.locator('input#email').fill('#Enter email here');
  await page.locator('input#password').fill('#Enter pwd here');
  await page.locator('[value="Sign In"]').click();

  
  await page.waitForURL('https://builder.knack.com');

  await page.context().storageState({ path: authFile });
});