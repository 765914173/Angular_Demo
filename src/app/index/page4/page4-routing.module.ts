import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page4Component } from './page4.component';

export const routes: Routes = [
    { path: 'page4', component: Page4Component }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class Page4RoutingModule {}
