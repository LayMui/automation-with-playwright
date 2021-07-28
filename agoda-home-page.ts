// agoda-home-page.ts
import type { Page } from 'playwright';

export class AgodaHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  HotelAndHomes = `xpath=//li[@data-element-name='all-rooms-tab']`;
  PrivateStay= `xpath=//li[@data-element-name='home']`;
  Package= `xpath=//li[@data-element-name='packages-tab']`;
  Flight= `xpath=//li[@data-element-name='flight-tab']`;


  async goto() {
    await this.page.goto('https://www.agoda.com/');
  }

  async selectHotelsAndHomes(keyword) {
    await this.page.click(this.HotelAndHomes);
    await this.page.fill('css=[data-selenium=textInput]', keyword, 'Enter');
   // await this.page.click('css=[data-element-date=check-in-box]');
   await this.page.click('css=[data-selenium=searchButton]');
  }

  async selectPrivateStay() {
    await this.page.click(this.PrivateStay);
  }
  
  async selectPackage() {
    await this.page.click(this.Package);
  }

  async selectFlight() {
    await this.page.click(this.Flight);
  }
}