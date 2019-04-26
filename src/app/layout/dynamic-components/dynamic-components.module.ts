import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplyConfigDirective } from '../directive/apply-config.directive';

@NgModule({
  declarations: [ Comp1Component, Comp2Component, ApplyConfigDirective, ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    Comp1Component, Comp2Component,
  ]
})
export class DynamicComponentsModule { }
