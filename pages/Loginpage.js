class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.getByPlaceholder('UserName');
    this.password = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button', { name: /login/i });
  }

  async goto() {
    await this.page.goto('https://demoqa.com/login');
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}

module.exports = LoginPage;