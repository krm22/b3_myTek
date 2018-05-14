import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

import {
  FormsModule,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormBuilder
} from '@angular/forms';


@NgModule({
  declarations: [
   LoginPage,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
   LoginPage,
  ],
})
export class MoviesPageModule {}
