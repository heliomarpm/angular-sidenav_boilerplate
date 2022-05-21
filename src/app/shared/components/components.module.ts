import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideNavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LayoutComponent } from './layout/layout.component';

const components = [
  SideNavComponent,
  HeaderComponent,
  BreadcrumbsComponent,
  LayoutComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class ComponentsModule { }
