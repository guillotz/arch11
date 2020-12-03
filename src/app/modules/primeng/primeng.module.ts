import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    FieldsetModule,
    MenubarModule
  ],
  exports: [
    SidebarModule,
    FieldsetModule,
    MenubarModule
  ]
})
export class PrimengModule { }
