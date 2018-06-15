import { NgModule } from '@angular/core';
import { MenuPageComponent, } from './menu-page/menu-page';
import { IonicModule } from 'ionic-angular'

@NgModule({
	declarations: [MenuPageComponent],
	imports: [IonicModule],
	exports: [MenuPageComponent]
})
export class ComponentsModule {}
