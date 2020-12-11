import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { TablaComponent } from './components/tabla/tabla.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TablaComponent, DatePickerComponent],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule
  ],
  exports: [
    PrimengModule,
    TablaComponent,
    FormsModule,
    DatePickerComponent
  ]
}) 
export class SharedModule { }
