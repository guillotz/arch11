import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    FieldsetModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    CalendarModule
  ],
  exports: [
    SidebarModule,
    FieldsetModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    CalendarModule
  ]
})
export class PrimengModule { }
