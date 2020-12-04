import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    FieldsetModule,
    MenubarModule,
    TableModule
  ],
  exports: [
    SidebarModule,
    FieldsetModule,
    MenubarModule,
    TableModule
  ]
})
export class PrimengModule { }
