import { Injectable } from '@angular/core';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  categories: Category[] = [
    { name: 'To Do', id: '1' },
    { name: 'Done', id: '2' },
    { name: 'Doing', id: '3' },
  ];
  constructor() { }
  getCategories(): Category[] {
    return this.categories;
  }
  serviceCall() {
    // console.log('Filter service was called');
  }
}
