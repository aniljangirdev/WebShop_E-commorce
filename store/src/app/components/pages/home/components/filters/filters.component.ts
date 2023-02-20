import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
 templateUrl: './filter.component.html'
})
export class FiltersComponent implements OnInit {

  @Output() showCategory = new EventEmitter<string>();

  categories : string[]= ['shoes','sports'];

  constructor() { 
    let sizeOfCategory = this.categories.length;
    console.log('size of category : '+sizeOfCategory);
    
  }

  ngOnInit(): void {
  }

  onShowCategory(category : string):void{
    this.showCategory.emit(category);
  }

}
