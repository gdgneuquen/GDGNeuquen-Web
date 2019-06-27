import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './screens/home/home.component';
import { CoreRoutingModule } from './core.router';
import { CarrouselHomeComponent } from './screens/home/carrousel-home/carrousel-home.component';
import { HomeNextEventComponent } from './screens/home/home-next-event/home-next-event.component';
import { HomeComunitiesComponent } from './screens/home/home-comunities/home-comunities.component';
import { HomeSponsorsComponent } from './screens/home/home-sponsors/home-sponsors.component';

@NgModule({
  declarations: [HomeComponent, CarrouselHomeComponent, HomeNextEventComponent, HomeComunitiesComponent, HomeSponsorsComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
