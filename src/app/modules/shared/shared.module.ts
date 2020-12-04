import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { TablaComponent } from './components/tabla/tabla.component';



@NgModule({
  declarations: [TablaComponent],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    PrimengModule,
    TablaComponent
  ]
}) 
export class SharedModule { }
