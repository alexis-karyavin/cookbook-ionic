import { Injectable } from '@angular/core';
// @ts-ignore
import data from '../../../assets/data/data.json';
import {AdapterCategory, CategoryModel} from '../model/category.model';
import {DishModel} from '../model/dish.model';
@Injectable({
  providedIn: 'root'
})
export class CookbookService {
  private categories: CategoryModel[] = [];
  constructor() {
    this.init();
  }
  private init(): void {
    data.forEach(item => {
      this.categories.push(AdapterCategory.adapt(item));
    });
    this.getDishesAll();
  }
  public getCategories(): CategoryModel[] {
    return this.categories;
  }
  public getDishesAll(): DishModel[] {
    const dishes = [];
    this.categories.forEach(category => {
     category.dishes.forEach(dish => dishes.push(dish));
    });
    return dishes;
  }
  public getDishes(categoryName: string) {
    const category = this.categories.find(item => {
      return item.url === categoryName;
    });
    return category.dishes;
  }
  public getDish(dishName: string): DishModel {
    let dish: DishModel;
    this.categories.forEach(category => {
      category.dishes.forEach(item => {
        if ( item.url === dishName ) {
          dish = item;
        }
      });
    });
    return dish;
  }
}
