class BookStorePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.getByPlaceholder('Type to search');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/books');
  }

  async search(bookName) {
    await this.searchBox.fill(bookName);
  }

  getRow(bookName) {
    return this.page.locator('tbody tr', { hasText: bookName });
  }

  async extractBookDetails(row) {
    const title = await row.locator('td').nth(1).textContent();
    const author = await row.locator('td').nth(2).textContent();
    const publisher = await row.locator('td').nth(3).textContent();

    return {
      title: title?.trim(),
      author: author?.trim(),
      publisher: publisher?.trim()
    };
  }
}

module.exports = BookStorePage;