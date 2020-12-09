import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    FieldsetModule,
    MenubarModule,
    TableModule,
    ButtonModule
  ],
  exports: [
    SidebarModule,
    FieldsetModule,
    MenubarModule,
    TableModule,
    ButtonModule
  ]
})
export class PrimengModule { }
