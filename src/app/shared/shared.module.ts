import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { CustomdirectivesModule } from './directives/customdirectives/customdirectives.module';
import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule,
    CustomdirectivesModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    BsDropdownModule
  ],
  declarations: [],
  exports: []
})
export class SharedModule {}
