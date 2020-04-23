import {Component, OnInit} from '@angular/core';
import {CookbookService} from '../../core/services/cookbook.service';
import {CategoryModel} from '../../core/model/category.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public categories: CategoryModel[];
  constructor(private cookbookService: CookbookService) {}

  ngOnInit(): void {
    this.categories = this.cookbookService.getCategories();
  }

}
