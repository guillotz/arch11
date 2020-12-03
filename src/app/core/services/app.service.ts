import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpService: HttpService) { }

  getTest(){
    return this.httpService.get('https://httpbin.org/get');
  }
}
