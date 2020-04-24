import { Component, OnInit } from '@angular/core';
import {CookbookService} from "../../../../core/services/cookbook.service";
import {DishModel} from "../../../../core/model/dish.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about-dish-page',
  templateUrl: './about-dish-page.component.html',
  styleUrls: ['./about-dish-page.component.scss'],
})
export class AboutDishPageComponent implements OnInit {
  public dish: DishModel;
  private paramUrl: string;
  constructor(private cookbookService: CookbookService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.paramUrl = (res.id);
    });
    this.dish = this.cookbookService.getDish(this.paramUrl);
  }
}
