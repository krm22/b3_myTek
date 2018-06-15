import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewActorPage } from './view-actor';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    ViewActorPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewActorPage),
    IonicImageLoader
  ],
})
export class ViewActorPageModule {}
