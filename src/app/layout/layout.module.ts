import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { TabContainerComponent } from './components/tab-container/tab-container.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { TabComponent } from './components/tab/tab.component';
import { FormsModule } from '@angular/forms';
import { DynamicComponentsModule } from './dynamic-components/dynamic-components.module';

@NgModule({
  declarations: [
    LayoutComponent,
    TabContainerComponent,
    MenuComponent,
    TabComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule,
    FormsModule,
    DynamicComponentsModule,
  ],
  entryComponents: [
    TabComponent,
  ]
})
export class LayoutModule { }
