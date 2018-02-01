import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsPage } from './details';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectiveModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    DetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsPage),
    PipesModule,
    DirectiveModule
  ],
  exports: [
  ]
})
export class DetailsPageModule {}
