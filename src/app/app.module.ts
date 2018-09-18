import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { IndexModule } from './index/index.module';
import { UserModule } from './user/user.module';
import { FunctionModule } from './function/function.module';
import { CKEditorModule } from 'ng2-ckeditor';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    UserModule,
    FunctionModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
