export class DishModel {
  public dishName: string;
  public url: string;
  public ingredients: Array<{ingredientName: string, count: string}>;
  public cookingMethod: Array<string>;
}
