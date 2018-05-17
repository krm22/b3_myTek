import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(SignupPage),
  ],
  exports: [
    SignupPage,
  ],
})
export class MoviesPageModule {}
