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
  
  await page.getByRole('link', { name: 'Monitoring' }).click();
  
  await expect(page).toHaveURL(/monitoring/);

//await expect(page.getByText('NE-wan Test 1')).toBeVisible();


// Tenant Validation
  const requiredTenant = 'NE-wan Test';
  const currentTenant = await page.locator('span.text-h6').textContent();

  console.log(`Current Tenant: ${currentTenant}`);

  if (currentTenant?.trim() !== requiredTenant) {

    console.log(`Selecting tenant: ${requiredTenant}`);

    // Open tenant popup
    await page.locator('button').first().click();

    // Search tenant
    await page.locator('.app-bar-autocomplete-box input').fill(requiredTenant);

    // Wait for result
    await page.locator('.app-bar-search-list').waitFor();

    // Select tenant from results
    await page.locator('.app-bar-search-list .v-list-item').filter({ hasText: requiredTenant }).first().click();

    // Optional verification
    await expect(page.locator('span.text-h6')).toHaveText(requiredTenant);

  } else {
    console.log(`Tenant already selected: ${requiredTenant}`);
  }

// Device Selection

await expect(page.getByRole('link', { name: "Basant's Device" })).toBeVisible();
await page.getByRole('link', { name: "Basant's Device" }).click();
await expect(page).toHaveURL(/tenants\/sites/);

// Configuration

await expect(page.getByRole('button', { name: /CONFIGURATION/i })).toBeVisible();
await page.getByRole('button', { name: /CONFIGURATION/i }).click();

// Click L3 Interfaces
await page.getByText('L3 Interfaces').click();
await expect(page).toHaveURL(/l3interfaces/);

// L3 Interfaces table

const spokeWanRow = page.locator('tbody tr').filter({hasText: 'SPOKE_WAN'});

await expect(spokeWanRow).toBeVisible();

const interfaceName = await spokeWanRow.locator('td').nth(0).textContent();

console.log('SPOKE_WAN Interface:', interfaceName?.trim());

// Dashboard -> Real Time

await page.getByText('Dashboards').click();

await page.getByText('Real Time').click();

// Search device
await page.getByPlaceholder('Search').fill("Basant's Device");

// Find device row
const deviceRow = page.locator('tbody tr').filter({hasText: "Basant's Device"});

await expect(deviceRow).toBeVisible();

const expectedLinkStatus = `SPOKE_WAN : ${interfaceName?.trim()}`;
const actualRowText = await deviceRow.textContent();

// Log result
if (actualRowText?.includes(expectedLinkStatus)) {
  console.log('Inventory table data matched');
} else {
  console.log('Data Mismatch');
}
// Assertion
await expect(deviceRow).toContainText(expectedLinkStatus);

});