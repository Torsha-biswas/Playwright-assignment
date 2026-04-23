const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/Loginpage');
const ProfilePage = require('../pages/ProfilePage');
const BookStorePage = require('../pages/BookStorePage');
const FileUtils = require('../utils/fileUtils');
test.beforeEach(({ browserName }) => {
  test.skip(browserName === 'webkit', 'Skipping WebKit due to DemoQA instability');
});

test('UI Automation - Book Store (POM + Utils)', async ({ page }) => {

  const login = new LoginPage(page);
  const profile = new ProfilePage(page);
  const books = new BookStorePage(page);

  const username = 'torsha@04';
  const password = 'Torsha@04';
  const bookName = 'Learning JavaScript Design Patterns';

  // LOGIN
  await login.goto();
  await login.login(username, password);

  await expect(profile.profileName).toBeVisible();

  // LOGOUT
  await profile.logout();

  // BOOK STORE
  await books.goto();
  await books.search(bookName);

  const row = books.getRow(bookName);
  await expect(row).toBeVisible();

  // EXTRACT + SAVE (UTILS USED HERE)
  const bookData = await books.extractBookDetails(row);

  FileUtils.saveBookDetails(bookData);

  console.log('POM + Utils execution completed successfully');
});