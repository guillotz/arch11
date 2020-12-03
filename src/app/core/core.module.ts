import { NgModule, Optional, SkipSelf } from '@angular/core';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';

import { Interceptor } from './interceptor/interceptor';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';

@NgModule({
  imports: [
    
  ],
  providers: [
    //Proveer guards acá
   // { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ]
})
//Necesario para que solo de importe una sola vez
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}