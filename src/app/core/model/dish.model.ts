export class DishModel {
  public name: string;
  public url: string;
  public images: Array<string> = [];
  public cookingTime: string;
  public ingredients: Array<{ingredientName: string, count: string}>;
  public cookingMethod: Array<string>;
}

export class AdapterDish {
  public static adapt(res) {
    const dish = new DishModel();
    dish.name = res.dishName;
    dish.url = res.url;
    dish.cookingTime = res.cookingTime;
    dish.images = res.images;
    dish.ingredients = res.ingredients;
    dish.cookingMethod = res.cookingMethod;
    return dish;
  }
}
