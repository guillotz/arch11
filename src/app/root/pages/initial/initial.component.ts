import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  autos? : any[];
  headers?: any;
  isLoading: boolean = false;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.autos = this.appService.getAutos();
    this.headers = this.appService.getHeadersAutos();
  }

  go(ruta: string){
    this.router.navigate([ruta]);
  }

  showLoading(){
    //Petición armada para testear el spinner
    this.appService.getTest().subscribe(data => {alert(data)});
  }
  

}
