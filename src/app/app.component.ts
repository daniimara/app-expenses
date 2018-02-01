import { Component } from '@angular/core';
import { Config, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Globalization } from '@ionic-native/globalization';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(
    private config: Config,
    private platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private globalization: Globalization,
    private translate: TranslateService
  ) {
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.globalization.getLocaleName()
      .then((res) => {
        //console.log('getLocaleName: ', JSON.stringify(res.value));
        this.translate.setDefaultLang(res.value);
        this.translate.use(res.value);
  
        this.translate.get('BACK_BUTTON_TEXT')
        .subscribe(backText => {
          this.config.set('ios', 'backButtonText', backText);
        });
      });

    });
  }
}

