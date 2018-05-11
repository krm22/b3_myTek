import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMoviePage } from './view-movie';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    ViewMoviePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewMoviePage),
    IonicImageLoader
  ],
})
export class ViewMoviePageModule {}
