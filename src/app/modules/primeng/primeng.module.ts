import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { FieldsetModule } from 'primeng/fieldset';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    FieldsetModule
  ],
  exports: [
    SidebarModule,
    FieldsetModule
  ]
})
export class PrimengModule { }
