class ProfilePage {
  constructor(page) {
    this.page = page;
    this.profileName = page.locator('#userName-value');
    this.logoutBtn = page.getByRole('button', { name: /log\s*out/i });
  }

  async logout() {
    await this.logoutBtn.click();
  }
}

module.exports = ProfilePage;