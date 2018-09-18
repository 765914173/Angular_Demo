import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page4Component } from './page4.component';

import { Page4RoutingModule } from './page4-routing.module';

@NgModule({
    imports: [
        CommonModule,
        Page4RoutingModule
    ],
    declarations: [
        Page4Component
    ],
    exports: [
        Page4Component
    ]
})
export class Page4Module { }
