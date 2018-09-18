import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionRoutingModule } from './function-routing.module';
import { FunctionComponent } from './function.component';
import { TimeComponent } from './time/time.component';
import { ExpenseComponent } from './expense/expense.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    FunctionRoutingModule
  ],
  declarations: [FunctionComponent, TimeComponent, ExpenseComponent, TableComponent]
})
export class FunctionModule { }
