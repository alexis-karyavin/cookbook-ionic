import { Component, OnInit } from '@angular/core';
import {CookbookService} from '../../../../core/services/cookbook.service';
import {DishModel} from '../../../../core/model/dish.model';

@Component({
  selector: 'app-dishes-page',
  templateUrl: './dishes-page.component.html',
  styleUrls: ['./dishes-page.component.scss'],
})
export class DishesPageComponent implements OnInit {
  constructor(public cookbookService: CookbookService) {}

  public dishes: DishModel[];
  ngOnInit() {
    this.dishes = this.cookbookService.getDishes();
  }

}
