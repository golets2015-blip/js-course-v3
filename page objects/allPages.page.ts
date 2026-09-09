import { Page } from '@playwright/test';
import { AccountPage } from './account.page';
import { BasePage } from '../page objects/base.page';
import { CheckoutPage } from './checkout.page';
import { HomePage } from './home.page';
import { LoginPage } from './login.page';
import { ProductPage } from './product.page';

export class AllPages {
    page: Page;
    accountPage: AccountPage;
    basePage: BasePage;
    checkoutPage: CheckoutPage;
    homePage: HomePage;
    loginPage: LoginPage;
    productPage: ProductPage;

    constructor (page: Page) {
        this.page = page;
        this.accountPage = new AccountPage(page);
        this.basePage = new BasePage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.homePage = new HomePage(page);
        this.loginPage = new LoginPage(page);
        this.productPage = new ProductPage(page);
    }

}