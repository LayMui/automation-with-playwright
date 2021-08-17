import { test, expect } from '@playwright/test';
import { AgodaHomePage } from './agoda-home-page';

    
//test.describe('search for accommodation', async ({ page }) => {
      //  const agodaHomePage = new AgodaHomePage(page)
        test('hotels and homes', async ({ page }) => {
                const agodaHomePage = new AgodaHomePage(page)
  
                await agodaHomePage.goto();
            //    await agodaHomePage.selectHotelsAndHomes('Jakarta');
                
                await agodaHomePage.takeScreenShot('hotelsAndHomesSearchResult.png');
              
        });
      
        // test('private stay', async ({ page }) => {
        //      // await agodaHomePage.selectPrivateStay();
        //         // await agodaHomePage.selectPackage();
        //         // await agodaHomePage.selectFlight();
        // });
//});


