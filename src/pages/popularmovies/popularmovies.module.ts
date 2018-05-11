import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopularmoviesPage } from './popularmovies';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    PopularmoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(PopularmoviesPage),
    IonicImageLoader
  ],
})
export class PopularmoviesPageModule {}
