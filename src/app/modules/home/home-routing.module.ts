import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {StartPageComponent} from '../start-page/start-page.component';
import {DishesPageComponent} from './pages/dishes-page/dishes-page.component';
import {AboutDishPageComponent} from "./pages/about-dish-page/about-dish-page.component";

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent
  },
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: ':category',
        component: DishesPageComponent
      },
      {
        path: ':category/:id',
        component: AboutDishPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
