import { Component, OnInit } from '@angular/core';
import {CookbookService} from '../../../../core/services/cookbook.service';
import {DishModel} from '../../../../core/model/dish.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dishes-page',
  templateUrl: './dishes-page.component.html',
  styleUrls: ['./dishes-page.component.scss'],
})
export class DishesPageComponent implements OnInit {
  public paramUrl: string;
  constructor(public cookbookService: CookbookService,
              private route: ActivatedRoute) {}

  public dishes: DishModel[];
  ngOnInit() {
    this.route.params.subscribe(res => {
      this.paramUrl = (res.category);
    });
    if (this.paramUrl === 'all') {
      this.dishes = this.cookbookService.getDishesAll();
    } else {
      this.dishes = this.cookbookService.getDishes(this.paramUrl);
    }
  }

}
