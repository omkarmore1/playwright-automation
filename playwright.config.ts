import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: false,

  retries: 0,

  reporter: 'html',

  use: {
    baseURL: 'https://dev-controller.nesecure.net',

    headless: false,

    launchOptions: {
      slowMo: 1000,
    },

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});