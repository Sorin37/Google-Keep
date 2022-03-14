import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../category';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  categories: Category[];
  @Output() emitSelectedFilter = new EventEmitter<string>();
  @Output() emitSearchString = new EventEmitter<string>();
  searchString:string;
  constructor(
    private filterService:FilterService
  ) {}

  ngOnInit(): void {
    this.filterService.serviceCall();
    this.categories=this.filterService.getCategories();
  }

  selectFilter(categoryId: string) {
    this.emitSelectedFilter.emit(categoryId);
    this.searchString = undefined;
  }

  searchFilter(){
    // console.log("On click:" + this.searchString)
    this.emitSearchString.emit(this.searchString);
  }
}
