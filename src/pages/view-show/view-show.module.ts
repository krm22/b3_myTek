import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewShowPage } from './view-show';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    ViewShowPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewShowPage),
    IonicImageLoader
  ],
})
export class ViewShowPageModule {}
