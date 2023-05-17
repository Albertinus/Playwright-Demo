// import { PlaywrightTestConfig } from '@playwright/test';

// const config: PlaywrightTestConfig = {

//   timeout: 5 * 60 * 1000, // Setup timeout to 5 minutes.  
//   use: {
//     headless: false, // Turn off headless mode.
//   },

// };

// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  projects: [
    // Setup project
    { name: 'setup', testMatch: /.*\.setup\.ts/ },

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Use prepared auth state.
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});