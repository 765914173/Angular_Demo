import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FunctionComponent } from './function/function.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'function', component: FunctionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
