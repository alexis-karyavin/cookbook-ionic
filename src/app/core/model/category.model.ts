import {AdapterDish, DishModel} from './dish.model';

export class CategoryModel {
  public name: string;
  public url: string;
  public dishes: DishModel[] = [];
}

export class AdapterCategory {
  public static adapt(res) {
    const category = new CategoryModel();
    category.name = res.categoryName;
    category.url = res.url;
    if ( !!res.dishes ) {
      res.dishes.forEach(item => {
        category.dishes.push(AdapterDish.adapt(item));
      });
    }
    return category;
  }
}
