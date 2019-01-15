import { CommonModule } from '@angular/common';
import { FilterListPipe } from './filterlist.pipe';
import { NgModule } from '@angular/core';
import { SortPipe } from './sort.pipe';
import { UtcDatePipe } from './utc-date.pipe';

// import {CustomDatePipe} from '../custom-date.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SortPipe, UtcDatePipe,FilterListPipe],
  exports: [SortPipe, UtcDatePipe,FilterListPipe]
})
export class CustompipesModule {
  static forRoot() {
    return {
      ngModule: CustompipesModule,
      providers: []
    };
  }
}
