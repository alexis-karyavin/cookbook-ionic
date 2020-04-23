import {Component, Input, OnInit} from '@angular/core';
import {DishModel} from '../../core/model/dish.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() dish: DishModel;
  constructor() { }

  ngOnInit() {}

}
