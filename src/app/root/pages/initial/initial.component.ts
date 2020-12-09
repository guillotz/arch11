import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  autos? : any[];
  headers?: any;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.autos = this.appService.getAutos();
    this.headers = this.appService.getHeadersAutos();
  }
  

}
