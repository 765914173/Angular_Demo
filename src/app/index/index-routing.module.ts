import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    children: [
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      { path: 'page3', component: Page3Component },
      { path: '', loadChildren: './page4/page4.module#Page4Module' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
