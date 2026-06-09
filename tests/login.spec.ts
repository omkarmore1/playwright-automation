import { test, expect } from '@playwright/test';

test('Verify monitoring flow', async ({ page }) => {

  // Open login page
  await page.goto('https://dev-controller.nesecure.net/login');

  // Verify login page opened
  await expect(page).toHaveURL(/login/);

  await page.getByPlaceholder('Email').fill('admin@nesecure.com');

  await page.getByPlaceholder('Password').fill('password@123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('https://dev-controller.nesecure.net/dashboard/overview');
  });