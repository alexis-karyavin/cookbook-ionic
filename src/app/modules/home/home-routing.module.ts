import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {StartPageComponent} from '../start-page/start-page.component';
import {DishesPageComponent} from './pages/dishes-page/dishes-page.component';

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
        path: ':id',
        component: DishesPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
