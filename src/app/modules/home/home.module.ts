import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {StartPageComponent} from '../start-page/start-page.component';
import {DishesPageComponent} from './pages/dishes-page/dishes-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    StartPageComponent,
    DishesPageComponent
  ]
})
export class HomePageModule {}
