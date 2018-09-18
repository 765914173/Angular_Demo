import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegistedComponent } from './registed/registed.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'registed', component: RegistedComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
