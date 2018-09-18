import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RecordComponent } from './record/record.component';
import { ReviewComponent } from './review/review.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, RecordComponent, ReviewComponent, ReportsComponent]
})
export class DashboardModule { }
