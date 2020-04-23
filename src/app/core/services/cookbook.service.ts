import { Injectable } from '@angular/core';
// @ts-ignore
import data from '../../../assets/data/data.json';
import {AdapterCategory, CategoryModel} from "../model/category.model";
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
  }

  public getCategory(name: string): CategoryModel {

    return new CategoryModel();
  }
}
