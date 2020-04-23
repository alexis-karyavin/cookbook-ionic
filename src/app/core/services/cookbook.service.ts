import { Injectable } from '@angular/core';
// @ts-ignore
import data from '../../../assets/data/data.json';
@Injectable({
  providedIn: 'root'
})
export class CookbookService {
  private data = data;
  constructor() { }

  private getDish(id: number) {

  }
}
