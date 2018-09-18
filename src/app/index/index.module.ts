import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';


@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule
  ],
  declarations: [IndexComponent, Page1Component, Page2Component, Page3Component]
})
export class IndexModule { }
