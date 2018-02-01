import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ExpenseProvider } from '../providers/expense-service/expense-service';
import { FormatterNumber } from '../utils/formatter';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    PhotoViewer,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExpenseProvider,
    FormatterNumber
  ]
})
export class AppModule {}
