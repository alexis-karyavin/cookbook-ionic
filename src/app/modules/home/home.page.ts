import {Component, OnInit} from '@angular/core';
import {CookbookService} from '../../core/services/cookbook.service';
import {CategoryModel} from '../../core/model/category.model';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public categories: CategoryModel[];
  constructor(private cookbookService: CookbookService,
              private menu: MenuController) {}

  ngOnInit(): void {
    this.categories = this.cookbookService.getCategories();
  }

  public clickItem(): void {
    this.menu.close();
  }

}
