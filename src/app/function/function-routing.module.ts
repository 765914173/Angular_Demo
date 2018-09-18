import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunctionComponent } from './function.component';
import { TimeComponent } from './time/time.component';
import { ExpenseComponent } from './expense/expense.component';


const routes: Routes = [
  {
    path: 'function',
    component: FunctionComponent,
    children: [
      { path: 'time', component: TimeComponent },
      { path: 'expense', component: ExpenseComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionRoutingModule { }
