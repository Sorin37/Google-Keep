import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  categories: Category[];

  constructor(
    private filterService:FilterService
  ) {}

  ngOnInit(): void {
    this.filterService.serviceCall();
    this.categories=this.filterService.getCategories();
  }
}
