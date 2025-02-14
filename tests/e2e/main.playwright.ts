import { test, expect } from '@playwright/test';
import {HomePage} from "./PageObjects/Home.page";

test('has title', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();

  await expect(page).toHaveTitle(/BoardGameGeek/);
});

test('open browse menu', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.openBrowseMenu();

  await expect(homePage.allBoardGamesLink).toBeVisible();
});

test('search for a game', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.searchForGame('Spirit Island');

  await expect(page).toHaveTitle(/Spirit Island/);
});
