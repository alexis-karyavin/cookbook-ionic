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
    this.getDishes()
  }
  public getCategories(): CategoryModel[] {
    return this.categories;
  }
  public getCategory(name: string): CategoryModel {
    return new CategoryModel();
  }
  public getDishes(): DishModel[] {
    const dishes = [];
    this.categories.forEach(category => {
     category.dishes.forEach(dish => dishes.push(dish));
    });
    return dishes;
  }
}
